import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#ff6868ff";
    } else {
      return "rgb(82, 82, 241)";
    }
  }
};

const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#fc3333ff";
    } else {
      return "rgb(104, 104, 233)";
    }
  }
};

// В качествет generic расширяем button
export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  /* background-color: ${({ $isRed }) =>
    $isRed ? "#ff6868ff" : "rgb(82, 82, 241)"}; */
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled)};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};

  &:hover {
    /* background-color: ${({ $isRed }) =>
      $isRed ? "#fc3333ff" : "rgb(104, 104, 233)"}; */

    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }
`;
