import { twMerge } from "tailwind-merge";

interface TableProps {
  children: React.ReactNode;
  headers: string[];
  classNameTable?: string;
  classNameTHead?: string;
  classNameHeader?: string;
}

const Table = ({
  children,
  headers = [],
  classNameTable,
  classNameTHead,
  classNameHeader,
}: TableProps) => {
  return (
    <table className={twMerge("table-auto text-black w-full", classNameTable)}>
      <thead>
        <tr className={twMerge("text-sm font-normal", classNameTHead)}>
          {headers.map((header: string, index: number) => (
            <th
              key={index}
              className={twMerge(
                "px-2 py-2 text-left pb-4 font-normal",
                classNameHeader
              )}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
