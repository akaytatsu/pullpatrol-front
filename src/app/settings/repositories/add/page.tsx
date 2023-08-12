"use client";

import Content from "@/components/Content";
import { Button } from "@cloudscape-design/components";
import { useRouter } from "next/navigation";
import RepoForm from "../formComponent";

const Page = () => {
  const router = useRouter();

  return (
    <Content.Root className="mt-7" title="Add new repository">
      <RepoForm />
      <Content.Footer className="justify-end">
        <Button
          variant="link"
          onClick={() => router.push("/settings/repositories")}
        >
          voltar
        </Button>
      </Content.Footer>
    </Content.Root>
  );
};

export default Page;
