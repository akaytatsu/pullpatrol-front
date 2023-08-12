import Button from "@/components/Button/Button";
import Status from "@/components/Status/Status";
import { Table, TableItem, TableLine } from "@/components/Table";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const TablePage = () => {
  return (
    <Table headers={["USER", "ROLE", "STATUS", "ACTIONS"]}>
      <TableLine>
        <TableItem>
          <p className="text-sm">Thiago Freitas</p>
          <p className="text-xs">thiagosistemas3@gmail.com</p>
        </TableItem>
        <TableItem>
          <p className="text-sm">Admin</p>
        </TableItem>
        <TableItem>
          <Status variation="green">active</Status>
        </TableItem>
        <TableItem>
          <Button text="Details" icon={<PencilSquareIcon />} />
        </TableItem>
      </TableLine>
    </Table>
  );
};

export default TablePage;
