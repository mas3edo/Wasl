import Hero from "./(home)/Hero";
import Achivements from "./(home)/achivements";
import Services from "./(home)/services";
import Clients from "./(home)/Clients";
import HomeContact from "./(home)/Home-Contact";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Achivements />
      <Services />
      <Clients />
      <HomeContact />
    </>
  );
}
