import { useContext } from "react";
// Шаг 5: Импортируем контекст из родительского компонента
import { BlogContext } from "./BlogManagment";

function Message() {
  // Шаг 6: Достаем данные через useContext
  const { blogData } = useContext(BlogContext);

  return (
    <div>
      {/* Если данные есть (!!blogData), показываем их */}
      {!!blogData && (
        <p>
          Новый пост: {blogData.message}
        </p>
      )}
    </div>
  );
}

export default Message;
