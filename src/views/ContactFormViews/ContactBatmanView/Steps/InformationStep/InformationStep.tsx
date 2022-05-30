import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Controller, useForm } from "react-hook-form";
import { InformationStepProps } from "./types";
import { InputGroup } from "../../../../../molecules/InputGroup/InputGroup";
import isValidEmail from "../../../utils/helper";
import { useContactBatmanStore } from "../../../../../stores/contact-form-store";

type TData = {
  firstname: string;
  lastname: string;
  email: string;
};

const formSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
});

const InformationStep = ({ submitFnc }: InformationStepProps): JSX.Element => {
  const { contactInformaiton, setContactInformaiton } = useContactBatmanStore();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<TData>({
    resolver: joiResolver(formSchema),
    defaultValues: contactInformaiton,
  });

  const _handleSubmit = async (data: TData) => {
    const emailValidation = await isValidEmail(data.email);

    if (!emailValidation) {
      return setError("email", { message: "Invalid email" });
    }

    setContactInformaiton(data);

    submitFnc();
  };

  return (
    <div>
      <h1>Your information :</h1>

      <form onSubmit={handleSubmit(_handleSubmit)}>
        <Controller
          name="lastname"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="lastname"
              error={errors["lastname"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="firstname"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="firstname"
              error={errors["firstname"]?.message}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { name, value, onChange } }): JSX.Element => (
            <InputGroup
              type="text"
              label="email"
              error={errors["email"]?.message}
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

export default InformationStep;
