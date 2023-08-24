import Button from "@/components/Button/Button";
import GitIcon from "@/components/GitIcon/GitIcon";
import RepoMark from "@/components/RepoMark/RepoMark";
import Status from "@/components/Status/Status";
import { Table, TableItem, TableLine } from "@/components/Table";
import { formatDate } from "@/lib/utils";
import { useRepositoriesStore } from "@/store/repositories/stores";
import { IRepository } from "@/store/repositories/types";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const showTableData = (data: IRepository[]) => {
  const router = useRouter();

  if (data.length == 0) {
    return (
      <TableLine>
        <TableItem colspan={7} className="text-center">
          empty
        </TableItem>
      </TableLine>
    );
  }

  return data.map((repo) => (
    <TableLine>
      <TableItem>
        <p>{repo.label}</p>
      </TableItem>
      <TableItem>
        <div className="space-y-1">
          <p className="text-xs">
            <RepoMark url={repo.repository} />
          </p>
        </div>
      </TableItem>
      <TableItem className="flex flex-col items-center justify-center">
        <p className="text-xs">
          <GitIcon size={16} driver={repo.driver} />
        </p>
        <p className="mt-1 text-xs">{repo.driver}</p>
      </TableItem>
      <TableItem>
        <p className="text-sm">{formatDate(repo.created_at)}</p>
        <p className="text-xs">Created At</p>
      </TableItem>
      <TableItem>
        <p className="text-sm">Thiago Freitas</p>
        <p className="text-xs">thiagosistemas3@gmail.com</p>
      </TableItem>
      <TableItem>
        <div className="justi">
          {repo.active && <Status variation="green">active</Status>}
          {!repo.active && <Status variation="red">inactive</Status>}
        </div>
      </TableItem>
      <TableItem>
        <Button
          text="Details"
          icon={<PencilSquareIcon />}
          onClick={() => router.push("/settings/repositories/" + repo.id)}
        />
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
