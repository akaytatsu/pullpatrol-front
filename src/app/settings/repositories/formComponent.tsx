import { Form, SpaceBetween } from "@cloudscape-design/components";

const RepoForm = () => {
  return (
    <Form
      actions={
        <SpaceBetween size="xs" direction="horizontal">
          {/* {isNew() ? <NewActions action={() => sendForm()} /> : <EditActions />} */}
        </SpaceBetween>
      }
    >
      <SpaceBetween size="xl" direction="vertical">
        {/* <AbsenceTypesSelect />
          <Period />
          <Description />
          <UploadFile />
          <ApprovalList /> */}
      </SpaceBetween>
    </Form>
  );
};

export default RepoForm;
