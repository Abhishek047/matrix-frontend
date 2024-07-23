import { Button, Stack, Text } from "@chakra-ui/react";
import { FormField, useForm } from "../../hooks/useForm";
import { FormRender } from "../../components/forms/FormRender";

type CurrentData = {
  email: string;
  password: string;
};
type GenericFields<K> = {
  [key in keyof K]: FormField;
};
const INPUTS: GenericFields<CurrentData> = {
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
  const { handleChange, fieldState, errorState, validate } =
    useForm<CurrentData>({
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
        {Object.keys(INPUTS).map((value) => {
          const key = value as keyof CurrentData;
          const field = INPUTS[key];
          return (
            <FormRender
              key={field.id}
              input={field}
              value={fieldState[key]}
              error={errorState[key]}
              defaultValue={field.defaultValue}
              onChange={handleChange}
            />
          );
        })}
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </div>
  );
};

export default Login;
