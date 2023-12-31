import Button from "@/components/Button/Button";
import Content from "@/components/Content/Content";
import RepoMark from "@/components/RepoMark/RepoMark";
import Status from "@/components/Status/Status";
import { Table, TableItem, TableLine } from "@/components/Table";
import Title from "@/components/Title/Title";
import UserLine from "@/components/UserLine/UserLine";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Title>PullRequests</Title>
      <Content className="mt-7">
        <Table
          headers={["DATE", "INFO", "STATUS", "PENDING REVIEWERS", "ACTIONS"]}
        >
          <TableLine>
            <TableItem>
              <p className="text-sm">2023-07-27</p>
              <p className="text-xs">08:12 pm</p>
            </TableItem>
            <TableItem>
              <div className="space-y-1">
                <p className="text-sm">Envio de PR para xyz</p>
                <p className="text-xs">
                  <RepoMark url="https://github.com/akaytatsu/pullpatrol-back/pull/1" />
                </p>
                <p className="text-xs">sender: akaytatsu</p>
              </div>
            </TableItem>
            <TableItem>
              <Status status="pending" />
            </TableItem>
            <TableItem className="items-center space-y-2">
              <UserLine />
              <UserLine />
              <UserLine />
            </TableItem>
            <TableItem>
              <Button text="Details" icon={<PencilSquareIcon />} />
            </TableItem>
          </TableLine>
        </Table>
      </Content>
    </div>
  );
};

export default Page;
