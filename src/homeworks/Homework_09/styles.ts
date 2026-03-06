import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 10, 66, 0.9);
  gap: 30px;
  padding: 100px;
`;

export const Title = styled.p`
  font-size: 28px;
  color: orangered;
  letter-spacing: 1px;
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  height: fit-content;

  & label {
    color: white;
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 1px;
    /* text-align: center; */
  }
`;

export const ButtonControl = styled.div`
  width: 150px;
  border-radius: 6px;
  /* overflow: hidden; */
  & button {
    border-radius: 10px;
  }
`;

export const Notes = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
  height: fit-content;
  border: 3px solid olivedrab;
  width: 400px;
  border-radius: 12px;
  font-size: 25px;
  padding: 16px;
`;

export const NoteTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: olivedrab;
`;

export const NoteItem = styled.li`
  font-size: 20px;
  font-weight: bold;
`;
