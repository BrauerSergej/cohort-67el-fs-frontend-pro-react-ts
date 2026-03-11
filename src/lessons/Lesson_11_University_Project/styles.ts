import styled from "@emotion/styled";
import { GraduationCap } from "lucide-react";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #f3f3f5;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: center;
  cursor: pointer;
`;

export const LogoIcon = styled(GraduationCap)`
  color: #2563eb;
  width: 33px;
  height: 33px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 23px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  /* Скрываем навигацию на мобилках для чистоты (опционально) */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-family: sans-serif;
  color: #4b5563;
  font-size: 16px;
  transition: color 0.2s ease-in-out;
  font-weight: 500;
  &:hover {
    color: #111827;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #f2f8ff;
  min-height: 100%;
  padding: 80px 20px;
`;

export const HeroTitle = styled.h2`
  font-size: clamp(32px, 5vw, 50px); /* Шрифт уменьшается сам */
  font-family: sans-serif;
  color: #111827;
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: 0.02em;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: self-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 12px;
  margin: 20px auto;
  & input {
    width: 100%;
    max-width: 600px;
    font-size: 15px;
    border: #e5e7eb solid 2px;
    /* height: 45px; */
    padding: 20px;
    border-radius: 50px;
    background-color: #f3f3f5;
  }

  & label {
    font-size: 17px;
  }
`;

export const ButtonControl = styled.div`
  button {
    width: 100%;
    height: 45px;
    border-radius: 50px;
    font-size: 15px;
    padding: 20px;
    background-color: #030213;
  }
`;

export const HeroSubTitle = styled.p`
  font-size: 18px;
  color: #4b5563;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 auto 40px auto;
  letter-spacing: 0.7px;
  span {
    display: block;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 19px;
  color: black;
  margin-bottom: auto;
`;

export const ContainerUni = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  padding: 0;
  margin: 40px 20px;
  padding: 40px 20px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  min-height: 260px;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  background-color: white;
  position: relative;
  padding: 40px;
  word-break: break-all;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-5px); /* Приподнимается вверх */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Тень становится глубже */
    border-color: #2563eb; /* Рамка подсвечивается синим */
    transition: all 0.3s ease; /* Плавный переход */
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #2563eb;
`;

export const NavLinkCard = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #4d49fc;
  }
`;

export const FooterRoot = styled.footer`
  min-height: 315px;
  background-color: #101828;
  padding: 48px 0;
  display: flex;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 40px;
  padding: 0 20px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  gap: 16px;
  min-width: 250px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
  & {
    color: #ffffff;
    font-family: sans-serif;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
  & h3 {
    color: #ffffff;
    font-family: sans-serif;
  }
`;

export const FooterLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #99a1af;
  font-family: sans-serif;
`;

export const Logo = styled(GraduationCap)`
  width: 27px;
  height: 27px;
  color: #ffffff;
`;

export const FooterTitle = styled.h3`
  font-family: sans-serif;
  font-size: 23px;
  color: #ffffff;
`;

export const BrandTagline = styled.p`
  color: #99a1af;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.03em;
`;

export const LogoWrapper = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  gap: 7px;
`;

export const CountryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FooterBottom = styled.div`
  border-top: 1px solid #1e2939;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  color: #99a1af;
  font-size: 16px;
  font-family: sans-serif;
`;
