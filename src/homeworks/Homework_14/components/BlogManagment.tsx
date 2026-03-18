import { useState, createContext, type ChangeEvent } from "react";
import Card from "./Card";
import { type BlogData, type BlogContextType } from "./types";
import { MainTitle, MainWrapper } from "../styles"; // Используем твои стили
import Button from "components/Button/Button";

// Шаг 2: Создаём контекст - глобальное хранилище данных, которое мы хотим передать вниз по дереву, т.е все что находится в return компонента main
export const BlogContext = createContext<BlogContextType>({
  blogData: undefined,
  setBlogData: () => {},
});

function BlogManagement() {
  const [inputValue, setInputValue] = useState<string>("");
  const [blogData, setBlogData] = useState<undefined | BlogData>(undefined);

  const handlePost = () => {
    // Сохраняем введенный текст в глобальный стейт контекста
    setBlogData({ message: inputValue });
  };

  return (
    // Шаг 3: Оборачиваем всё дерево в Provider
    <BlogContext.Provider
      value={{ blogData: blogData, setBlogData: setBlogData }}
    >
      <MainWrapper>
        <MainTitle>Blog Management</MainTitle>
        <textarea
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setInputValue(e.target.value)
          }
          placeholder="Введите сообщение..."
        />
        <Button name="Запостить" onClick={handlePost}></Button>
        <Card />
      </MainWrapper>
    </BlogContext.Provider>
  );
}

export default BlogManagement;