import styled from "@emotion/styled";

interface InputComponentProps {
  $error: string | undefined;
}

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
  border: ${({ $error }) =>
    $error ? "1px solid #fc3333ff" : "1px solid #3f3f3f"};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${({ disabled }) =>
    disabled ? "#acacacff" : "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
