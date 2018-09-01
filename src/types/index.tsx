// src/types/index.tsx


export interface EnthusiasmState{
    languageName: string;
    enthusiasmLevel: number;
}
export interface IFormFields{
  name: string,
  email: string,
  reason: string,
  notes: string,
}
export interface ContactUsState{
  values: IFormFields
}
export interface StoreState {
  enthusiasm: EnthusiasmState;
  contactUs: ContactUsState;
}
