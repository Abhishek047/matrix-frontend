import { Stack, Text } from "@chakra-ui/react";
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
  },
  password: {
    id: "password",
    label: "Password",
    required: true,
    validation: {
      required: true,
    },
    type: "password",
  },
};

const Login = () => {
  const { handleChange, fieldState, errorState, validate } = useForm({
    formFields: INPUTS,
  });
  console.log(fieldState, errorState);
  return (
    <div>
      <Stack gap={8}>
        <Text size="xl">Login form</Text>
        {Object.values(INPUTS).map((value) => (
          <FormRender key={value.id} input={value} onChange={handleChange} />
        ))}
      </Stack>
    </div>
  );
};

export default Login;
