import { useState } from "react";
import AddressStep from "./Steps/AddressStep/AddressStep";
import InformationStep from "./Steps/InformationStep/InformationStep";
import { ContactBatmanViewProps } from "./types";

const ContactBatmanView = ({}: ContactBatmanViewProps): JSX.Element => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return (
        <AddressStep submitFnc={() => setStep((current) => current + 1)} />
      );
    case 1:
      return (
        <InformationStep submitFnc={() => setStep((current) => current + 1)} />
      );
    default:
      throw new Error(`step ${step} does not exist`);
  }
};

export default ContactBatmanView;
