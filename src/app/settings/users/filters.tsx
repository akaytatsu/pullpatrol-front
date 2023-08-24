"use client";
import Filters from "@/components/Filters";

const FiltersPage = () => {
  return (
    <Filters.BaseFilterContent>
      {/* <FormField label="search">
        <Input value={""} type="search" />
      </FormField>
      <FormField label="role">
        <Select
          selectedOption={{ label: "Option 1", value: "1" }}
          options={[
            { label: "All", value: "1" },
            { label: "Reviewer", value: "2" },
            { label: "Admin", value: "2" },
          ]}
        />
      </FormField>
      <FormField label="status">
        <Select
          selectedOption={{ label: "Option 1", value: "1" }}
          options={[
            { label: "All", value: "1" },
            { label: "Active", value: "2" },
            { label: "Inactive", value: "3" },
          ]}
        />
      </FormField> */}
    </Filters.BaseFilterContent>
  );
};

export default FiltersPage;
