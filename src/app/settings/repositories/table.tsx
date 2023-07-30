import Button from "@/components/Button/Button";
import RepoMark from "@/components/RepoMark/RepoMark";
import Status from "@/components/Status/Status";
import { Table, TableItem, TableLine } from "@/components/Table";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const TablePage = () => {
  return (
    <Table
      headers={["REPOSITORY", "DRIVER", "DATE", "USER", "STATUS", "ACTIONS"]}
    >
      <TableLine>
        <TableItem>
          <div className="space-y-1">
            <p className="text-xs">
              <RepoMark url="https://github.com/akaytatsu/pullpatrol-back/pull/1" />
            </p>
          </div>
        </TableItem>
        <TableItem>
          <p className="text-xs">GITHUB</p>
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
          <Status variation="red">pending</Status>
        </TableItem>
        <TableItem>
          <Button text="Details" icon={<PencilSquareIcon />} />
        </TableItem>
      </TableLine>
    </Table>
  );
};

export default TablePage;
