import Content from "./components/Content";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <div>
      <Hero />
      <Content />
      <Partners />
      <Roadmap />
    </div>
  );
}
