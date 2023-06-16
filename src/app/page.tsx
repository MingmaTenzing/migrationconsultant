"use client";

import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Experience from "../../components/Experience";
import Connect from "../../components/Connect";
import Socials from "../../components/Socials";
import OtherSocials from "../../components/OtherSocials";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Experience />
      <Connect />
      <Socials />
      <OtherSocials />
    </main>
  );
}
