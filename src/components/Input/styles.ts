import styled from "@emotion/styled";

interface InputComponentProps {
  $error: string | undefined;
}

const generateInputColor = (error: string | undefined, disabled?: boolean) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (error) {
      return "#ff6868ff";
    } else {
      return "#3f3f3f";
    }
  }
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  // Здесь в скобках ловим props | используем функцию generateInputColor
  border: 1px solid ${({ disabled, $error }) => generateInputColor($error, disabled)};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  /* background-color: ${({ disabled }) =>
    disabled ? "#acacacff" : "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; */

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
export const ErrorMessage = styled.p`
  height: 20px;
  color: #ff6868ff;
`;
