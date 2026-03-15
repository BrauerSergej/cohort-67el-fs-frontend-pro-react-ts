import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const ClientTitle = styled.h1`
  font-size: 30px;
  color: rgba(0, 10, 66, 0.9);
`;

export const ClientList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

export const ClientItem = styled.li`
  list-style: none;
`;

export const ClientLink = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: rgba(0, 10, 66, 0.9);

  &:hover {
    text-decoration: underline;
  }
`;
