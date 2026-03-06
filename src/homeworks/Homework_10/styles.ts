import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: rgb(26, 35, 53);
`;
export const Text = styled.li`
  flex: 1;
  font-size: 24px;
  color: black;
  font-weight: bold;
`;
export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  min-height: 300px;
  max-height: 600px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 40px;
  gap: 20px;
  background-color: white;
`;
export const ContainerJoke = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
