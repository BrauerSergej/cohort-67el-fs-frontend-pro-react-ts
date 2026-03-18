// Иппортируем BrowserRouter, Route, Routes для настройки маршрутизации
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "components/constants/routes";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import GlobalStyles from "styles/GlobalStyles";
import Clients from "pages/EmployeeApp/Clients/Clients";
import FaceBook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import Instagram from "pages/EmployeeApp/Clients/Instagram/Instagram";
import LinkedIn from "pages/EmployeeApp/Clients/LinkedIn/LinkedIn";

// lessons
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Lesson_11 from "lessons/Lesson_11_University_Project/Lesson_11";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12";
// import Lesson_13 from "lessons/Lesson_13/Lesson_13";
import Lesson_14 from "lessons/Lesson_14/Lesson_14";

// homeworks
// import Homework_06 from "./homeworks/Homework_06/Homework_06";
// import Homework_07 from "./homeworks/Homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_09 from "homeworks/Homework_09/Homework_09";
// import Homework_10 from "homeworks/Homework_10/Homework_10";
// import Homework_12 from "homeworks/Homework_12/Homework_12";

function App() {
  return (
    //
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      {/* <Layout> */}
        {/* В Routes будем складывать различные страницы - маршруты*/}
        {/* <Routes> */}
          {/* Route - маршрут - принимает в себя две props 1. path, 2. element*/}
          {/* element принимает в качестве значения какуюто страницу т.е компонент */}
          {/* Путь это ссылка на какойто url по которому будет распологаться какойто компонент  */}
          {/* <Route path={ROUTES.HOME} element={<Home />} /> */}
          {/* <Route path={ROUTES.ABOUT} element={<About />} /> */}
          {/* <Route path={ROUTES.CONTACT_US} element={<ContactUs />} /> */}
          {/* <Route path={ROUTES.CLIENTS} element={<Clients />} /> */}
          {/* <Route path={ROUTES.FACEBOOK} element={<FaceBook />} /> */}
          {/* <Route path={ROUTES.INSTAGRAM} element={<Instagram />} /> */}
          {/* <Route path={ROUTES.LINKEDIN} element={<LinkedIn />} /> */}
          {/* <Route path={ROUTES.LOGIN} element={<LogIn />} /> */}
          {/* * - обозначает любой путь  */}
          {/* <Route path={ROUTES.NOT_FOUND} element="Page Not Found" /> */}
        {/* </Routes> */}
      {/* </Layout> */}
      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_12 /> */}
      <Lesson_14 />

      {/* Homeworks */}
      {/* <Homework_06/> */}
      {/* <Homework_07/> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      {/* <Homework_12 /> */}
    </BrowserRouter>
  );
}

export default App;
