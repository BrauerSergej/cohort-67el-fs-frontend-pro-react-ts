import { useNavigate } from "react-router-dom";
import { ROUTES } from "components/constants/routes";
import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  // Функция хук useNavigate - не принимает в качестве аргументов ничего но она возвращает функцию navigate - которая позволяет нам переходить на различные страницы
  const navigate = useNavigate();

  const goToHomePage = () => {
    // navigate принимает в качестве аргумента строку "" - а в этой строке мы прописываем маршрут куда нам надо перейти
    navigate(ROUTES.HOME);
  };
  return (
    <LayoutWrapper>
      <Header>
        {/* Передаём в onClick {goToHomePage} */}
        {/* onClick - принимает абсолутно любой элемент */}
        <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          {/* В NavLink - можно определить какая страница сейчас включена - а в 
          Link нет*/}
          {/* <HeaderLink
            style={(isActive) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </HeaderLink> */}
          {/* Обязательный props у NavLink - это to - принимает в качестве значения путь куда нужно перейти */}
          <HeaderLink style={getActiveStyles} to={ROUTES.HOME}>
            Home
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.CONTACT_US}>
            Contact Us
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.CLIENTS}>Clients</HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.ABOUT}>
            About
          </HeaderLink>
          <HeaderLink style={getActiveStyles} to={ROUTES.LOGIN}>
            Login
          </HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to={ROUTES.HOME}>Home</FooterLink>
          <FooterLink to={ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={ROUTES.CLIENTS}>Clients</FooterLink>
          <FooterLink to={ROUTES.ABOUT}>About</FooterLink>
          <FooterLink to={ROUTES.LOGIN}>Login</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
