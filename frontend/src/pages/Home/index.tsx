import { AnimationProvider } from "../../services/contexts/animation";
import { ModalProvider } from "../../services/contexts/login-modal";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { ModalLogin } from "./components/Modal";
import "./style.scss";

export function Home() {
  return (
    <>
      <AnimationProvider>
        <ModalProvider>
          <Menu />
          <Hero />
          <ModalLogin />
        </ModalProvider>
      </AnimationProvider>
    </>
  );
}