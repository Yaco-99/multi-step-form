import React, { forwardRef } from "react";
import { InputGroupProps } from "./types";

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ label, cornerText, helperText, value, error, ...props }, ref) => {
    return (
      <div>
        <div>
          <label htmlFor={props.id}>{label}</label>

          {cornerText && <span>{cornerText}</span>}
        </div>

        <input {...props} ref={ref} value={value} />

        {helperText && <p>{helperText}</p>}

        {error && <p>{error}</p>}
      </div>
    );
  }
);
