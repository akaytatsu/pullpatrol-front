import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

interface FormProps {
  children: React.ReactNode;
  actionCancel?: () => void;
  actionSubmit?: () => void;
}

const Form = ({ children, actionCancel, actionSubmit }: FormProps) => {
  return (
    <div className="w-full">
      <form className="max-w-lg">
        <Stack spacing={4}>{children}</Stack>
      </form>
      <div className="flex flex-row justify-end w-full px-4 pt-4 border-t border-gray-200 mt-7">
        <ButtonGroup variant="outline" spacing="8">
          {actionCancel && (
            <Button
              onClick={actionCancel}
              colorScheme="gray"
              variant="ghost"
              size="sm"
            >
              Cancel
            </Button>
          )}
          {actionSubmit && (
            <Button onClick={actionSubmit} colorScheme="blue" size="sm">
              Save
            </Button>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Form;
