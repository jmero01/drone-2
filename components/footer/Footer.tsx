import { Container } from "../container";
import { ContactUs } from "./Contact";

export default function Footer() {
  return (
    <>
      <Container>
        <div className="bg-white/10 border-t border-black">
          <div>Footer</div>
          <ContactUs />
        </div>
      </Container>
    </>
  );
}
