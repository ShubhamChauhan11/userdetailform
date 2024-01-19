import {
  Title,
  FormComponent,
  Input,
  Label,
  Section,
  Mandatory,
  Button,
  Image,
} from "./styled";

import UserLogo from "../assets/user.png";
import { useState } from "react";
import Modal from "./Modal";

function Form() {
  interface user {
    userName: string | undefined;
    email: string | undefined;
    phone: number | undefined;
    city: string | undefined;
    address: string | undefined;
  }
  const [userDetail, setUserDetail] = useState<user>({
    userName: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    address: undefined,
  });
  const [showModal, setShowModal] = useState(false);
  return !showModal ? (
    <FormComponent
      onSubmit={() => {
        setShowModal(true);
        console.log("details are", userDetail);
      }}
    >
      <Title>
        <Image src={UserLogo} /> User Details
      </Title>
      <Section>
        <Label>
          User Name <Mandatory>*</Mandatory>
        </Label>
        <Input
          type="text"
          value={userDetail.userName}
          onChange={(e) => {
            setUserDetail((prev) => ({ ...prev, userName: e.target.value }));
          }}
          placeholder="name"
        />
      </Section>
      <Section>
        <Label>
          Email <Mandatory>*</Mandatory>
        </Label>
        <Input
          type="email"
          placeholder="email"
          value={userDetail.email}
          onChange={(e) => {
            setUserDetail((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
      </Section>
      <Section>
        <Label>
          Phone <Mandatory>*</Mandatory>
        </Label>
        <Input
          type="number"
          placeholder="phone"
          value={userDetail.phone}
          onChange={(e) => {
            setUserDetail((prev) => ({
              ...prev,
              phone: parseInt(e.target.value),
            }));
          }}
        />
      </Section>
      <Section>
        <Label>
          City <Mandatory>*</Mandatory>
        </Label>
        <Input
          type="text"
          placeholder="city"
          value={userDetail.city}
          onChange={(e) => {
            setUserDetail((prev) => ({ ...prev, city: e.target.value }));
          }}
        />
      </Section>
      <Section>
        <Label>
          Address <Mandatory>*</Mandatory>
        </Label>
        <Input
          type="text"
          placeholder="address"
          value={userDetail.address}
          onChange={(e) => {
            setUserDetail((prev) => ({ ...prev, address: e.target.value }));
          }}
        />
      </Section>
      <Button
        disabled={
          userDetail.userName === undefined ||
          userDetail.phone === undefined ||
          userDetail.city === undefined ||
          userDetail.address === undefined ||
          userDetail.email === undefined
            ? true
            : false
        }
        type="submit"
      >
        Submit
      </Button>
    </FormComponent>
  ) : (
    <Modal
      userDetail={userDetail}
      setShowModal={setShowModal}
      setUserDetail={setUserDetail}
    />
  );
}

export default Form;
