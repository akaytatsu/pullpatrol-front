import { tv } from "tailwind-variants";

interface StatusProps {
  status: any;
}

const statusVariants = tv({
  base: "rounded-full px-5 py-1 text-xs font-bold w-max",
  variants: {
    status: {
      pending: "bg-yellow-200 text-yellow-800",
      approved: "bg-green-200 text-green-800",
      rejected: "bg-red-200 text-red-800",
      inprogress: "bg-blue-200 text-blue-800",
    },
  },
  defaultVariants: {
    status: "pending",
  },
});

const Status = ({ status = "pending" }: StatusProps) => {
  const statusTranslate: { [key: string]: string } = {
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    inprogress: "In Progress",
  };

  const finalStatus = statusTranslate[status];

  return (
    <div className={statusVariants({ status: status })}>{finalStatus}</div>
  );
};

export default Status;
