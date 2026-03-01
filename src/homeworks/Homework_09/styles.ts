import styled from "@emotion/styled";
export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 20px;

  & label {
    color: white;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const NotesList = styled.div`
  display: flex;
  flex-direction: column-reverse; // Новые заметки будут сверху
  gap: 10px;
  width: 100%;
  max-height: 400px; // Ограничим высоту
  overflow-y: auto;
`;

export const NoteCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  color: #2f3945;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
  border-left: 8px solid #4a90e2;
  border-right: 8px solid #4a90e2;
`;

export const Title = styled.p`
  font-size: 26px;
  color: orangered;
  letter-spacing: 1px;
`;
