import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export type AllowedTextInputs = "text" | "password" | "email";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  helperText?: string;
  inputType: AllowedTextInputs;
  hasError?: boolean;
  onChange: (value: any, field: string) => void;
}
export const TextInput = ({
  label,
  name,
  placeholder: _ph,
  helperText: _ht,
  inputType,
  hasError: _er = false,
  onChange,
}: Props) => {
  return (
    <FormControl isInvalid={_er}>
      <FormLabel>{label}</FormLabel>
      <Input
        onChange={(event) => onChange(event.target.value, name)}
        type={inputType}
      />
      {_er && _ht && <FormHelperText>{_ht}</FormHelperText>}
    </FormControl>
  );
};
