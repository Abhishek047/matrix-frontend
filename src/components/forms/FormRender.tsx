import { FormField } from "../../hooks/useForm";
import { AllowedTextInputs, TextInput } from "./TextInput";
interface Props {
  input: FormField;
  onChange: (value: any, field: string) => void;
  value: any;
  error?: string;
  defaultValue: string;
}
export const FormRender = ({
  input,
  onChange,
  value,
  error,
  defaultValue,
}: Props) => {
  switch (input.type) {
    case "email":
    case "password": {
      return (
        <TextInput
          label={input.label}
          name={input.id}
          value={value || ""}
          inputType={input.type as AllowedTextInputs}
          onChange={onChange}
          hasError={!!error}
          helperText={error}
          defaultValue={defaultValue}
        />
      );
    }
    default:
      return <>Un-recognized from field</>;
  }
};
