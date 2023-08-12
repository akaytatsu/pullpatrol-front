import githubIcon from "@/../public/images/logos/bitbucket.svg";
import Button from "@/components/Button/Button";
import RepoMark from "@/components/RepoMark/RepoMark";
import Status from "@/components/Status/Status";
import { Table, TableItem, TableLine } from "@/components/Table";
import { useRepositoriesStore } from "@/store/repositories/stores";
import { IRepository } from "@/store/repositories/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const showTableData = (data: IRepository[]) => {
  if (data.length == 0) {
    return (
      <TableLine>
        <TableItem colspan={7} className="text-center">
          empty
        </TableItem>
      </TableLine>
    );
  }

  return <></>;

  return data.map((repo) => (
    <TableLine>
      <TableItem>
        <p>Label</p>
      </TableItem>
      <TableItem>
        <div className="space-y-1">
          <p className="text-xs">
            <RepoMark url="https://github.com/akaytatsu/pullpatrol-back/pull/1" />
          </p>
        </div>
      </TableItem>
      <TableItem className="flex flex-col items-center justify-center">
        <p className="text-xs">
          <Image
            src={githubIcon}
            alt="Github logo"
            width={16}
            height={16}
            className="w-5 h-5"
          />
        </p>
        <p className="mt-1 text-xs">GITHUB</p>
      </TableItem>
      <TableItem>
        <p className="text-sm">2023-07-27</p>
        <p className="text-xs">Created At</p>
      </TableItem>
      <TableItem>
        <p className="text-sm">Thiago Freitas</p>
        <p className="text-xs">thiagosistemas3@gmail.com</p>
      </TableItem>
      <TableItem>
        <div className="justi">
          <Status variation="green">active</Status>
        </div>
      </TableItem>
      <TableItem>
        <Button text="Details" icon={<PencilSquareIcon />} />
      </TableItem>
    </TableLine>
  ));
};

const TablePage = () => {
  const useRepoStore = useRepositoriesStore();

  return (
    <Table
      headers={[
        "LABEL",
        "REPOSITORY",
        "DRIVER",
        "DATE",
        "USER",
        "STATUS",
        "ACTIONS",
      ]}
    >
      {showTableData(useRepoStore.data)}
    </Table>
  );
};

export default TablePage;
