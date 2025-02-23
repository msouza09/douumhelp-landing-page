import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css"

const Main = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center text-center text-md-start" style={{ height: "60vh" }}>
        
        <div className="col-12 col-md-6">
          <h1 className="main-title">
            Encontre ou ofereça ajuda para tarefas do dia a dia!
          </h1>
          <p className="main-text">
            Conectamos quem precisa de serviços domésticos com profissionais especializados. 
            Tudo de forma rápida, prática e segura.
          </p>
          <div className="mt-4 buttons-container">
            <button className="custom-btn btn btn-warning text-black px-4 py-2 rounded-pill">
              Preciso de Ajuda
            </button>
            <button className="custom-btn btn btn-warning text-black px-4 py-2 rounded-pill">
              Quero oferecer serviços
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6 d-none d-md-block">
          <img src="/img/logo-white.png" alt="logo" className="img-fluid" style={{ width: "100%", maxWidth: "500px" }} />
        </div>
      </div>
    </div>
  );
};

export default Main;
