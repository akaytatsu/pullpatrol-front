"use client";
import Filters from "@/components/Filters";
import { FormField, Input, Select } from "@cloudscape-design/components";

const FiltersPage = () => {
  return (
    <Filters.BaseFilterContent>
      <FormField label="search">
        <Input value={""} type="search" />
      </FormField>
      <FormField label="driver">
        <Select
          selectedOption={{ label: "Option 1", value: "1" }}
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ]}
        />
      </FormField>
      <FormField label="status">
        <Select
          selectedOption={{ label: "Option 1", value: "1" }}
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ]}
        />
      </FormField>
    </Filters.BaseFilterContent>
  );
};

export default FiltersPage;
