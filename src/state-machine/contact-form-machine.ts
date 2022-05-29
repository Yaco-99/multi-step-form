import create from "zustand";

type TContactBatmanStore = {
  step: number;
  setStep: (step: number) => void;
  addressInformation?: {
    street: string;
    number: string;
    postalCode: string;
    city: string;
  };
  setAddressInformation: (
    addressInformation: TContactBatmanStore["addressInformation"]
  ) => void;
  contactInformaiton?: { firstname: string; lastname: string; email: string };
  setContactInformaiton: (
    contactInformaiton: TContactBatmanStore["contactInformaiton"]
  ) => void;
};

export const useContactBatmanStore = create<TContactBatmanStore>((set) => ({
  step: 0,
  setStep: (step) => set((state) => ({ ...state, step })),
  addressInformation: {
    street: "",
    number: "",
    postalCode: "",
    city: "",
  },
  setAddressInformation: (addressInformation) =>
    set((state) => ({
      ...state,
      addressInformation,
    })),
  contactInformaiton: { firstname: "", lastname: "", email: "" },
  setContactInformaiton: (contactInformaiton) =>
    set((state) => ({ ...state, contactInformaiton })),
}));
