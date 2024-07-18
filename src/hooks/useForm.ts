/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { validationCheck } from "../utils/functions";

type Validation = {
  args: number | boolean;
  message: string;
};
export interface FormField {
  id: string;
  label: string;
  required: boolean;
  validation: {
    min?: number | Validation;
    max?: number | Validation;
    required?: boolean | Validation;
  };
  type: React.HTMLInputTypeAttribute;
}

export interface FormFields {
  [key: string]: FormField;
}
interface FormProps {
  formFields: FormFields;
  validationAfterChange?: boolean;
}
export const useForm = ({
  formFields,
  validationAfterChange: _validationAfterChange = false,
}: FormProps) => {
  const [fieldState, setFieldState] = useState({} as Record<string, any>);
  const [errorState, setErrorState] = useState({} as Record<string, any>);

  const validateSingleField = useCallback(
    (fieldForValidation: string, valueToCheck: any) => {
      let error = "";
      // take all validations in it
      const validations: {
        [key: string]: number | boolean | Validation;
      } = formFields[fieldForValidation].validation;
      // map through the keys ie. max, min, required
      if (validations) {
        Object.keys(validations).every((key: string) => {
          const validationType = validations[key];
          if (typeof validationType === "object") {
            error = validationCheck({
              value: valueToCheck,
              validationType: key,
              args: validationType.args,
              validationMessage: validationType.message,
            });
          } else {
            error = validationCheck({
              value: valueToCheck,
              validationType: key,
              args: validationType,
            });
          }
          return !error;
        });
      }
      return error;
    },
    [formFields]
  );

  const validate = useCallback(
    (fields?: string | string[], value?: any) => {
      //   set what fields i need to check
      let fieldsToCheck = null;
      let noErrors = true;
      if (fields) {
        if (Array.isArray(fields)) {
          fieldsToCheck = fields;
        } else if (typeof fields === "string") {
          fieldsToCheck = [fields];
        }
      } else {
        fieldsToCheck = Object.keys(formFields);
      }
      if (fieldsToCheck) {
        const newErrorState = { ...errorState };
        fieldsToCheck.forEach((key: string) => {
          const valueToCheck = value || fieldState[key];
          const error = validateSingleField(key, valueToCheck);
          if (error) {
            noErrors = false;
            newErrorState[key] = error;
          } else {
            delete newErrorState[key];
          }
          setErrorState(newErrorState);
        });
      }
      return noErrors;
    },
    [validateSingleField, fieldState, formFields, errorState]
  );

  const handleChange = useCallback(
    (value: any, fieldId: string) => {
      try {
        if (formFields[fieldId]) {
          const newFieldState = { ...fieldState };
          newFieldState[fieldId] = value;
          setFieldState(newFieldState);
        } else {
          console.log("no-form-found");
        }
      } catch (error) {
        console.log("useForm-Error -> ", error);
      }
    },
    [fieldState, formFields]
  );
  return { handleChange, validate, fieldState, errorState };
};
