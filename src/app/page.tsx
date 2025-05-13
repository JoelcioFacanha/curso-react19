"use client";
import { useState } from "react";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/User";

const Home = () => {
  const [userName, setUserName] = useState("Elizangela");

  return (
    <div>
      <Menu />
      <br />
      <User name={userName}>
        <p>Este é um conteúdo extra fornecido com children</p>
      </User>
      <br />
      <button onClick={() => setUserName("Joelcio Façanha")}>Alterar</button>
      <br />
      <h2>Bem-vindo!</h2>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
