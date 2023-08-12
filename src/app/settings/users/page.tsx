import Content from "@/components/Content";
import Title from "@/components/Title/Title";
import FiltersPage from "./filters";
import TablePage from "./table";
const Page = () => {
  return (
    <div className="flex flex-col">
      <Title>Users</Title>
      <Content.Root className="mt-7" title="Repositories list">
        <Content.Header>
          <FiltersPage />
        </Content.Header>
        <TablePage />
      </Content.Root>
    </div>
  );
};

export default Page;
