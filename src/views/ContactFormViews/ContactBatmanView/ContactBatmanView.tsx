import { useState } from "react";
import AddressStep from "./Steps/AddressStep/AddressStep";
import { ContactBatmanViewProps } from "./types";

const ContactBatmanView = ({}: ContactBatmanViewProps): JSX.Element => {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      return <AddressStep />;
    default:
      throw new Error(`step ${step} does not exist`);
  }
};

export default ContactBatmanView;
