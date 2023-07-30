import BaseFilter from "./BaseFilter";

interface IOptions {
  label: string;
  value: string | number;
}

interface ChoiceFieldsProps {
  label: string;
  description?: string;
  options: ReadonlyArray<IOptions>;
  onChange?: (value: any) => void;
  value?: any;
}

const ChoiceFields = ({
  label = "",
  description,
  options,
  value,
  onChange,
}: ChoiceFieldsProps) => {
  return (
    <BaseFilter label={label}>
      <select value={value} className="px-2 py-1 mt-1 border border-gray-300">
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </BaseFilter>
  );
};

export default ChoiceFields;
