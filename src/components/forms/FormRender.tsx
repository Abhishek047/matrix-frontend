import { FormField } from "../../hooks/useForm";
import { AllowedTextInputs, TextInput } from "./TextInput";
interface Props {
  input: FormField;
  onChange: (value: any, field: string) => void;
}
export const FormRender = ({ input, onChange }: Props) => {
  switch (input.type) {
    case "email":
    case "password": {
      return (
        <TextInput
          label={input.label}
          name={input.id}
          inputType={input.type as AllowedTextInputs}
          onChange={onChange}
        />
      );
    }
    default:
      return <>Un-recognized from field</>;
  }
};
