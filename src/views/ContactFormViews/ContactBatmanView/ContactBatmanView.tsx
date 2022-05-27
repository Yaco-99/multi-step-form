import { useRouter } from "next/router";
import { useContactBatmanStore } from "../../../state-machine/contact-form-machine";
import AddressStep from "./Steps/AddressStep/AddressStep";
import InformationStep from "./Steps/InformationStep/InformationStep";
import { ContactBatmanViewProps } from "./types";

const ContactBatmanView = ({}: ContactBatmanViewProps): JSX.Element => {
  const router = useRouter();

  const { step, setStep } = useContactBatmanStore();

  const toNextStep = () => {
    setStep(step + 1);

    router.push(
      { pathname: router.pathname, query: { ...router.query, step: step + 1 } },
      undefined,
      {
        shallow: true,
      }
    );
  };

  switch (step) {
    case 0:
      return <InformationStep submitFnc={toNextStep} />;
    case 1:
      return <AddressStep submitFnc={toNextStep} />;
    default:
      throw new Error(`step ${step} does not exist`);
  }
};

export default ContactBatmanView;
