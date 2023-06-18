"use client";

import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Experience from "../../components/Experience";
import Connect from "../../components/Connect";
import Socials from "../../components/Socials";
import OtherSocials from "../../components/OtherSocials";
import ConnectingClients from "../../components/ConnectingClients";

export default function Home() {
  return (
    <main className="  overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Services />
      <ConnectingClients />
   
      <Connect />
      <Experience />
      <Socials />
      <OtherSocials />
    </main>
  );
}
