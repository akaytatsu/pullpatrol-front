"use client";

import Content from "@/components/Content";
import { useRepositoryFormStore } from "@/store/repositories/stores";
import { useEffect } from "react";
import RepoForm from "../formComponent";

interface PageProps {
  params: {
    id: number;
  };
}

const Page = ({ params }: PageProps) => {
  const useStore = useRepositoryFormStore();

  useEffect(() => {
    if (params.id) {
      useStore.fetchRepository(params.id);
    }
  }, []);

  return (
    <Content.Root className="mt-7" title="Edit repository">
      <RepoForm />
    </Content.Root>
  );
};

export default Page;
