import { IFieldProps } from "./../Field/Field.types";

export interface IFormContext extends IFormState {
    /* Function that allows values in the values state to be set */
    setValues: (values: IValues) => void;
    /* Function that validates a field */
    validate: (fieldName: string, fieldValue: string) => void;
  }

  export interface IFormValuesProps {
    [key: string]: string;
  }
  export interface IFields {
    [key: string]: IFieldProps;
  }
  // export interface IFormValues {
  //   [key: string]: IFormValuesProps;
  // }
  export interface IFormProps {
    /* The http path that the form will be posted to */
    action: string;
    /* The props for all the fields on the form */
    fields: IFields;
  
    formValues: IFormValuesProps;
    /* A prop which allows dispatch an update to fields */
    onFieldUpdate: (values: any) => void;
    /* A prop which allows content to be injected */
    render: () => React.ReactNode;
  }
  
  export interface IValues {
    /* Key value pairs for all the field values with key being the field name */
    [key: string]: any;
  }
  
  export interface IErrors {
    /* The validation error messages for each field (key is the field name */
    [key: string]: string;
  }
  
  export interface IFormState {
    /* The field values */
    values: IValues;
  
    /* The field validation error messages */
    errors: IErrors;
  
    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
  }