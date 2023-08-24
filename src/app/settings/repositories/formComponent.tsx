"use client";

import Form from "@/components/Form/Form";
import { useRepositoryFormStore } from "@/store/repositories/stores";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Switch,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const RepoForm = () => {
  const router = useRouter();
  const useStore = useRepositoryFormStore();

  return (
    <Form
      actionCancel={() => router.push("/settings/repositories")}
      actionSubmit={() => useStore.save()}
    >
      <FormControl isRequired isInvalid={useStore.formValidated?.label}>
        <FormLabel>Repository Name</FormLabel>
        <Input
          isRequired
          placeholder="Repository name"
          width="auto"
          value={useStore.formData.label || ""}
          onChange={(e) => useStore.setFormDataItem("label", e.target.value)}
        />
        <FormErrorMessage>
          {useStore.formValidated?.label?._errors}
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={useStore.formValidated?.repository}>
        <FormLabel>Repository URL</FormLabel>
        <Input
          isRequired
          placeholder="Repository URL"
          width="auto"
          htmlSize={60}
          value={useStore.formData.repository || ""}
          onChange={(e) =>
            useStore.setFormDataItem("repository", e.target.value)
          }
        />
        <FormHelperText>URL Git of repository</FormHelperText>
        <FormErrorMessage>
          {useStore.formValidated?.repository?._errors}
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={useStore.formValidated?.driver}>
        <FormLabel>Driver</FormLabel>
        <Select
          placeholder="Select driver"
          width="auto"
          value={useStore.formData.driver || ""}
          onChange={(e) => useStore.setFormDataItem("driver", e.target.value)}
        >
          <option value="github">GitHub</option>
          <option value="bitbucket">BitBucket</option>
        </Select>
        <FormErrorMessage>
          {useStore.formValidated?.driver?._errors}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Active?</FormLabel>
        <Switch
          isChecked={useStore.formData.active}
          onChange={(e) => useStore.setActive(e.target.checked)}
        />
      </FormControl>
    </Form>
  );
};

export default RepoForm;
