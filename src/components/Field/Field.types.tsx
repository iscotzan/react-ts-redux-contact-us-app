type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IValidation {
  //   rule: (values: IValues, fieldName: string, args: any) => string;
  rule: (value: string, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;

  /* The field validator function and argument */
  validation?: IValidation;
}
