import { ROUTES } from "components/constants/routes";
import {
  PageWrapper,
  ClientTitle,
  ClientList,
  ClientLink,
  ClientItem,
} from "./styles";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);
  return (
    <PageWrapper>
      <ClientTitle>Our Clients</ClientTitle>
      <ClientList>
        <ClientItem>
          <ClientLink to={ROUTES.FACEBOOK}>Facebook</ClientLink>
        </ClientItem>
        <ClientItem>
          <ClientLink to={ROUTES.INSTAGRAM}>Instagram</ClientLink>
        </ClientItem>
        <ClientItem>
          <ClientLink to={ROUTES.LINKEDIN}>LinkeIn</ClientLink>
        </ClientItem>
      </ClientList>
    </PageWrapper>
  );
}

export default Clients;
