export interface IProps {
    name: string;
    email: string;
    reason: string;
    notes: string;
    onFieldUpdate: (values: any) => void;
  }