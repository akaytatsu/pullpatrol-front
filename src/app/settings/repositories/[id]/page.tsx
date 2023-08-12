"use client";

import Content from "@/components/Content";
import { Button } from "@cloudscape-design/components";
import RepoForm from "../formComponent";

const Page = () => {
  return (
    <Content.Root className="mt-7" title="Edit repository">
      <RepoForm />
      <Content.Footer className="justify-end">
        <Button variant="link">voltar</Button>
      </Content.Footer>
    </Content.Root>
  );
};

export default Page;
