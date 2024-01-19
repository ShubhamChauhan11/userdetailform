import styled from "styled-components";

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: #ffffff;
  padding: 5px;
  border-bottom: 1px solid #add8e6;
`;
export const FormComponent = styled.form`
  width: 40vw;
  height: 60vh;
  background-color: rgba(45, 45, 45, 0.5);
  border-radius: 20px;
  padding-inline: 20px;

  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Input = styled.input`
  width: 70%;
  height: 30px;
  &:hover {
    background-color: #232323;
    border-color: #add8e6;
    box-shadow: 0 0 5px rgba(173, 216, 230, 0.7);
  }
  border: none;
  border-radius: 5px;
  padding-inline: 5px;
  &:focus {
    outline: none;
    border-color: #add8e6;
    box-shadow: 0 0 5px rgba(173, 216, 230, 0.7);
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Section = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const Mandatory = styled.span`
  color: #990000;
`;
export const Button = styled.button`
  width: 30%;
  height: auto;
  background-color: ${(props) => (props.color ? props.color : "#1e5b73")};
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.color ? `${props.color}99` : "#164152"};
  }

  border: none;
`;
export const Image = styled.img`
  width: 20px;
  height: 20px;
`;
export const ModalComponent = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: rgba(45, 45, 45, 0.5);
  border-radius: 20px;
  padding-inline: 20px;

  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  width: 90%;

  flex-direction: column;
  gap: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20%;
`;
export const Items = styled.span`
  word-wrap: break-word;
`;
export const Label = styled.label``;
