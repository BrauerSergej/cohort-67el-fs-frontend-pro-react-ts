import styled from "@emotion/styled";

export const ContactUsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;
  min-height: 400px;
  max-height: fit-content;
  background-color: white;
  padding: 60px;
  border-radius: 12px;
  gap: 30px;
  & input {
    width: 100%;
    height: 45px;
    background-color: #f3f3f5;
  }
  & label {
    font-size: 17px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  display: flex;
  /* justify-content: center; */
  font-size: 26px;
  color: #dc143c;
  font-weight: bold;
`;

export const ButtonControl = styled.div`
  button {
    width: 100%;
    border-radius: 10px;
  }
`;
