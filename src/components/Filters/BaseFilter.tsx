interface BaseFilterProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

const BaseFilter = ({ label, description, children }: BaseFilterProps) => {
  return (
    <div className="flex flex-col w-max">
      <p className="text-xs uppercase">{label}</p>
      <p>{children}</p>
    </div>
  );
};

export default BaseFilter;
