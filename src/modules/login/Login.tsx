import { Button, Stack, Text } from "@chakra-ui/react";
import { FormField, useForm } from "../../hooks/useForm";
import { FormRender } from "../../components/forms/FormRender";
import { auth, loginWithPassword } from "../../services/firebase";
import { useState } from "react";
import { Loader } from "../../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routeConfigs";

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const isValid = validate();
    if (!isValid) {
      return;
    }
    setIsLoading(true);
    try {
      const userDetails = await loginWithPassword(
        fieldState.email,
        fieldState.password
      );
      console.log(userDetails);
      console.log(auth.currentUser);
      navigate(ROUTES.HOME);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <Loader fill="full" />}
      <Stack gap={8}>
        <Text fontSize="2xl">Login form</Text>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
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
        </form>
      </Stack>
    </div>
  );
};

export default Login;
