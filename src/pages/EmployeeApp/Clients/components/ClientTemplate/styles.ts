import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Description = styled.p`
  font-size: 20px;
`;

export const ButtonControl = styled.div`
  width: 100%;
  & button {
    border-radius: 10px;
    font-size: 18px;
    height: 50px;
    width: 120px;
  }
`;

export const ClientLink = styled.a`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;
