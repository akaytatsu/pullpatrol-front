"use client";

import Content from "@/components/Content";
import RepoForm from "../formComponent";

const Page = () => {
  return (
    <Content.Root className="mt-7" title="Add new repository">
      <RepoForm />
    </Content.Root>
  );
};

export default Page;
