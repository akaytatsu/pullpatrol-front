"use client";
import Content from "@/components/Content";
import { useRepositoriesStore } from "@/store/repositories/stores";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TablePage from "./table";

const Page = () => {
  const useRepositories = useRepositoriesStore();
  const router = useRouter();

  useEffect(() => {
    useRepositories.getRepositories();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-full"></div>
      <Content.Root
        className="mt-7"
        title="Repositories list"
        action={
          <div className="flex flex-row justify-end">
            <Button onClick={() => router.push("/settings/repositories/add")}>
              ADD
            </Button>
          </div>
        }
      >
        <Content.Header>{/* <FiltersPage /> */}</Content.Header>
        <TablePage />
        <Content.Footer></Content.Footer>
      </Content.Root>
    </div>
  );
};

export default Page;
