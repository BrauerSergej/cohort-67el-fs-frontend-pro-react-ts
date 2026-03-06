import {
  PageWrapper,
  Title,
  NoteForm,
  ButtonControl,
  NoteTitle,
  Notes,
  NoteItem,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { type ChangeEvent, useState } from "react";
import { v4 } from "uuid";

function Homework_09() {
  // 1. noteText — это "черновик". То, что мы видим в инпуте прямо сейчас.
  const [noteText, setNoteText] = useState<string>("");
  // 2. notes — это "архив". Массив, где хранятся все уже добавленные заметки.
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const changeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteText(event.target.value);
  };
  // console.log(noteText);

  const onSaveNote = (event: any) => {
    event.preventDefault();
    // prevValue === savedNotes в момент вызова функции setSavedNotes
    if (noteText.trim() !== "") {
      setSavedNotes((prevValue: string[]) => {
        console.log(prevValue);
        return [...prevValue, noteText];
      });
      setNoteText("");
    }
  };

  // Допустим savedNotes = ["Coocking", "Shopping"]
  // Наша задача вернуть новый массив notesList который будет иметь вид(условно говоря) = [<NoteItem>Coocking</NoteItem>, <NoteItem>Shopping</NoteItem>]
  const notesList = savedNotes.map((value: string) => {
    return <NoteItem key={v4()}>{value}</NoteItem>;
  });

  return (
    <PageWrapper>
      <Title>Homework 09</Title>
      <NoteForm onSubmit={onSaveNote}>
        <Input
          id="todo-input"
          name="todo"
          type="text"
          placeholder="Enter your note"
          label="Notes"
          value={noteText}
          // Ловим событие
          onChange={changeNote}
        />
        <ButtonControl>
          <Button name="Add" type="submit" disabled={!noteText.trim()} />
        </ButtonControl>
      </NoteForm>
      <Notes>
        <NoteTitle>Your notes</NoteTitle>
        {notesList}
      </Notes>
    </PageWrapper>
  );
}

export default Homework_09;
