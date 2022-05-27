import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
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

const AddressStep = ({}: AddressStepProps): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<TData>({
    resolver: joiResolver(formSchema),
  });

  const _handleSubmit = () => {};

  return (
    <div>
      <h1>Address step :</h1>

      <form onSubmit={handleSubmit(_handleSubmit)}>
        <InputGroup type="text" {...register("number")} />

        <InputGroup type="text" {...register("street")} />

        <InputGroup type="text" {...register("city")} />

        <InputGroup type="text" {...register("postalCode")} />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddressStep;
