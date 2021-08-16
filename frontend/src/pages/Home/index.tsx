import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import "./style.scss";

export function Home() {
  return (
    <>
      <Menu />
      <Hero />
    </>
  );
}