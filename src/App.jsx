import React from "react";
import "./index.css";
import "./App.css";

// components
import Header from './components/header';
import Services from './components/services';
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Plan from "./components/plan"
import SecaoFormulario from "./components/secao_formulario"
import Footer from "./components/footer"
import PlanTeste from "./components/planteste";


const App = () => {

  return (
    <>
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Plan />
      <PlanTeste />
      <SecaoFormulario />
      <Footer />
    </>
  )
}

export default App
