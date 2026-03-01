import styled from "@emotion/styled";

import {
  PageWrapper,
  NotesList,
  NoteCard,
  HomeworkWrapper,
  Title,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { type ChangeEvent, useState } from "react";

function Homework_09() {
  // 1. noteText — это "черновик". То, что мы видим в инпуте прямо сейчас.
  const [noteText, setNoteText] = useState<string>("");
  const changeNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNoteText(event.target.value);
  };
  console.log(noteText);

  // 2. notes — это "архив". Массив, где хранятся все уже добавленные заметки.
  const [notes, setNotes] = useState<string[]>([]);

  // Срабатывает при клике на "Add". Переносит текст из черновика в архив.
  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      // Добавляем новое значение в массив, не удаляя старые
      setNotes([...notes, noteText]);
      // Очищаем инпут (черновик), чтобы он снова стал пустым
      setNoteText("");
    }
  };

  return (
    <PageWrapper>
      <HomeworkWrapper>
        <Title>Homework 09</Title>
        <NotesList>
          {notes.map((note, index) => (
            <NoteCard key={`${index} ${note}`}>{note}</NoteCard>
          ))}
        </NotesList>

        <Input
          id="input-id"
          name="input"
          type="text"
          placeholder="Enter your note"
          label="Notes"
          value={noteText}
          onChange={changeNote}
        />

        <Button
          name="Add"
          onClick={handleAddNote}
          disabled={!noteText.trim()}
        />
      </HomeworkWrapper>
    </PageWrapper>
  );
}

export default Homework_09;
