import { Button, Stack, Text } from "@chakra-ui/react";
import { FormFields, useForm } from "../../hooks/useForm";
import { FormRender } from "../../components/forms/FormRender";

const INPUTS: FormFields = {
  email: {
    id: "email",
    label: "Email",
    required: true,
    validation: {
      required: true,
    },
    type: "email",
    defaultValue: "",
  },
  password: {
    id: "password",
    label: "Password",
    required: true,
    validation: {
      required: true,
    },
    type: "password",
    defaultValue: "",
  },
};

const Login = () => {
  const { handleChange, fieldState, errorState, validate } = useForm({
    formFields: INPUTS,
  });
  const handleSubmit = () => {
    const isValid = validate();
    if (!isValid) {
      return;
    }
    console.log(fieldState);
  };
  return (
    <div>
      <Stack gap={8}>
        <Text fontSize="2xl">Login form</Text>
        {Object.values(INPUTS).map((value) => (
          <FormRender
            key={value.id}
            input={value}
            value={fieldState[value.id]}
            error={errorState[value.id]}
            defaultValue={value.defaultValue}
            onChange={handleChange}
          />
        ))}
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </div>
  );
};

export default Login;
