import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Controller, useForm } from "react-hook-form";
import { AddressStepProps } from "./types";
import { InputGroup } from "../../../../../molecules/InputGroup/InputGroup";

type TData = {
  street: string;
  number: string;
  box?: string;
  floor?: string;
  postalCode: string;
  city: string;
  country: string;
};

const formSchema = Joi.object({
  street: Joi.string().required(),
  number: Joi.string().required(),
  postalCode: Joi.string()
    .custom((pc) => {
      if (!/^[1-9]\d{3}$/.test(pc)) throw new Error("invalid postal code");

      return pc;
    })
    .required(),
  city: Joi.string().required(),
});

const AddressStep = ({ submitFnc }: AddressStepProps): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TData>({
    resolver: joiResolver(formSchema),
  });

  const _handleSubmit = () => {
    submitFnc();
  };

  return (
    <div>
      <h1>Address step :</h1>

      <form onSubmit={handleSubmit(_handleSubmit)}>
        <Controller
          name="number"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="Number"
              error={errors["number"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="street"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="Street"
              error={errors["street"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="City"
              error={errors["city"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="postalCode"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="PostalCode"
              error={errors["postalCode"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddressStep;
