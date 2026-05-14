import React from "react";
import "./index.css";
import "./App.css";
import { useRef } from "react";

import Header from "./components/header";
import Services from "./components/services";
import About from "./components/about";
import Processos from "./components/processos";
import SecaoFormulario from "./components/secao_formulario";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Depoimentos from "./components/depoimentos";

const App = () => {
  const ref = useRef(null);

  return (
    <>
      <Header refToServices={ref} />
      <Services ref={ref} />
      <About />
      <Processos />
      <Projects />
      <Depoimentos />
      <SecaoFormulario />
      <Footer />
    </>
  );
};

export default App;
