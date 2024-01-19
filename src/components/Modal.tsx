import {
  Button,
  Items,
  List,
  ListItem,
  ModalComponent,
  Title,
  Image,
} from "./styled";
import Edit from "../assets/edit.png";
import Verify from "../assets/checked.png";

function Modal({ ...props }) {
  let { userDetail, setShowModal, setUserDetail } = props;

  return (
    <ModalComponent>
      <Title>Verify Your Details</Title>
      <List>
        {Object.keys(userDetail).map((key) => (
          <ListItem key={key}>
            <Items>{key.toUpperCase()}</Items>
            <Items>{userDetail[key]}</Items>
          </ListItem>
        ))}
      </List>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            setShowModal(false);
          }}
        >
          <Image src={Edit} />
          Edit
        </Button>
        <Button
          onClick={() => {
            setShowModal(false);
            setUserDetail({
              userName: undefined,
              email: undefined,
              phone: undefined,
              city: undefined,
              address: undefined,
            });
          }}
          color="#004500"
        >
          <Image src={Verify} />
          Verify
        </Button>
      </div>
    </ModalComponent>
  );
}

export default Modal;
