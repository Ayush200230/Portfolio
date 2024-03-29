import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div id="html">
      <Head>
        <title>Ayush||Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

