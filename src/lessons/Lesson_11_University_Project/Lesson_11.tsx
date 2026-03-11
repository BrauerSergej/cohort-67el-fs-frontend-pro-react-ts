import styled from "@emotion/styled";
import {
  Main,
  ContainerUni,
  Card,
  Text,
  CardNumber,
  Header,
  Nav,
  Title,
  NavLink,
  LogoContainer,
  LogoIcon,
  HeroTitle,
  HeroSubTitle,
  ButtonControl,
  Form,
  FooterRoot,
  FooterContent,
  NavLinkCard,
  FooterColumn,
  Logo,
  FooterTitle,
  BrandTagline,
  LogoWrapper,
  FooterNav,
  FooterLink,
  CountryList,
  FooterBottom,
  CopyrightText,
} from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { type Universities } from "./types";
import { ErrorMessage } from "components/Input/styles";

// Условия проекта:
// Разместите на странице Input с label="Country", placeholder="Enter Country for searching uneversities", в который пользователь может ввести название страны для посика университетов
// Разместите на странице Button "Get Universities", по клику на которую, отправляется GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME
// Используйте для запросов axios
// Если в ответе на запрос пришли нормальные данные(запрос выполнен успешно), то разместите данные в стейте, а затем отобразите на стрнице в виде каточек. Сохраняйте не более 15 обьектов в массиве в стейт
// При повторном нажатии на кнопку "Get Universities", выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME и получите новые данные, и обновите стейт
// При получении ошибки, положите в отдельный стейт данные об ошибке с сообщением "Some Network Error". Отобразите ошибку на странице вместо карточек с университетами
// Стили на ваше усмотрение, контент тоже на ваше усмотрение
// Все нужно делать в компоненте Lesson_11

// Если пришел пустой массив, то на странице показываем "No Universities by your request ", ели ранее была показана ошибка или карточки с университетами, то нужно чтобы они скрылись

function Lesson_11() {
  const [search, setSearch] = useState<string>("");
  const [uni, setUni] = useState<Universities[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const UNI_URL: string = `http://universities.hipolabs.com/search?country=${search}`;
  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const [allData, setAllData] = useState<Universities[]>([]);
  const [lastSearch, setLastSearch] = useState("");
  const [offset, setOffset] = useState<number>(0);
  const getUniversities = async () => {
    if (!search.trim()) {
      setError("Please enter a country name");
      return;
    }
    try {
      setIsLoading(true);
      setError(undefined);
      setUni([]);

      const response = await axios.get(UNI_URL);
      console.log(response);
      if (response.data.length === 0) {
        setError("No Universities by your request");
        setUni([]);
        setAllData([]);
        return;
      }
      setLastSearch(search.trim());
      setAllData(response.data);
      setOffset(0);
      setUni(response.data.slice(0, 15));
    } catch (error: any) {
      setError(error.message);
      setUni([]);
      setAllData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const unis = uni.map((uni: Universities, index) => {
    return (
      <Card key={v4()}>
        <CardNumber>№:{index + 1}</CardNumber>
        <Text>Name: {uni.name}</Text>
        <Text>Country: {uni.country}</Text>
        <Text>
          Web:{" "}
          <NavLinkCard href={uni.web_pages[0]} target="_blank">
            {uni.web_pages[0]}
          </NavLinkCard>
        </Text>
      </Card>
    );
  });

  // Функция для показа СЛЕДУЮЩЕГО списка
  const showNextGroup = () => {
    const nextStart = offset + 15;
    // Если еще есть данные в массиве
    if (nextStart < allData.length) {
      setUni(allData.slice(nextStart, nextStart + 15));
      setOffset(nextStart);
    } else {
      // Если данные кончились — идем на первый круг
      setUni(allData.slice(0, 15));
      setOffset(0);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setError(undefined);
    // getUniversities(); // Запускаем поиск
    if (!search.trim()) {
      setError("Please enter a country name!");
      setAllData([]);
      setUni([]);
      return; // Всё, дальше не идем
    }
    if (allData.length > 0 && search.trim() === lastSearch) {
      showNextGroup();
    } else {
      getUniversities();
    }
  };

  return (
    <>
      <Header>
        <LogoContainer>
          <LogoIcon />
          <Title>UniSearch</Title>
        </LogoContainer>
        <Nav>
          <NavLink href="">About Us</NavLink>
          <NavLink href="">Rankings</NavLink>
          <NavLink href="">Contacts</NavLink>
        </Nav>
      </Header>
      <Main>
        <HeroTitle>
          Find your perfect <span>university</span>
        </HeroTitle>
        <HeroSubTitle>
          <span> Explore the world's top universities by country.</span>
          Compare academic programs, global rankings, and tuition fees to find
          your future.
        </HeroSubTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            id="search_input"
            name="COUNTRY_NAME"
            placeholder="Enter Country for searching universities"
            label="Country"
            value={search}
            onChange={onSearch}
          />
          <ButtonControl>
            <Button
              name={isLoading ? "Loading..." : "Get Universities"}
              type="submit"
              disabled={isLoading}
            />
          </ButtonControl>
        </Form>
        <ContainerUni>
          {!!error && <ErrorMessage>{error}</ErrorMessage>}
          {!!uni && unis}
        </ContainerUni>
      </Main>
      <FooterRoot>
        <FooterContent>
          <FooterColumn>
            <LogoWrapper>
              {" "}
              <Logo />
              <FooterTitle>UniSearch</FooterTitle>
            </LogoWrapper>
            <BrandTagline>
              Helping you find the best university for your future.
            </BrandTagline>
          </FooterColumn>
          <FooterNav>
            <h3>Study Destination</h3>
            <CountryList>
              {" "}
              <FooterLink href="#">Germany</FooterLink>
              <FooterLink href="#">France</FooterLink>
              <FooterLink href="#">Poland</FooterLink>
            </CountryList>
          </FooterNav>
          <FooterNav>
            <h3>Information</h3>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Ranking</FooterLink>
            <FooterLink href="#">Help</FooterLink>
          </FooterNav>
          <FooterColumn>
            <h3>Contact Us</h3>
            <FooterLink href="mailto:info@unisearch.com">
              info@unisearch.com
            </FooterLink>
            <FooterLink href="tel:+1 (555) 000-1234">
              +1 (555) 000-1234
            </FooterLink>
          </FooterColumn>
          <FooterBottom>
            <CopyrightText>
              © 2026 UniSearch. All rights reserved.
            </CopyrightText>
          </FooterBottom>
        </FooterContent>
      </FooterRoot>
    </>
  );
}

export default Lesson_11;
