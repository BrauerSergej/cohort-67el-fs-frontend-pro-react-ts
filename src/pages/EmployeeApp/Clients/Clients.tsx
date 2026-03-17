import {
  PageWrapper,
  ClientTitle,
  ClientList,
  ClientLink,
  ClientItem,
} from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientTitle>Our Clients</ClientTitle>
      <ClientList>
        <ClientItem>
          <ClientLink to="/clients/facebook">Facebook</ClientLink>
        </ClientItem>
        <ClientItem>
          <ClientLink to="/clients/instagram">Instagram</ClientLink>
        </ClientItem>
        <ClientItem>
          <ClientLink to="/clients/linkedin">LinkeIn</ClientLink>
        </ClientItem>
      </ClientList>
    </PageWrapper>
  );
}

export default Clients;