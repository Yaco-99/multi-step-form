export interface InputGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  cornerText?: string;

  helperText?: string;

  error?: string;
}
