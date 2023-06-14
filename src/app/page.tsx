"use client";

import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Experience from "../../components/Experience";
import Connect from "../../components/Connect";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Experience />
      <Connect />
    </main>
  );
}
