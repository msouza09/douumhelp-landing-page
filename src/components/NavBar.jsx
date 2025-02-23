import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand d-flex justify-content-center" href="#">
          <img src="/img/logo-white.png" alt="Logo" height="100" />
        </a>
        
        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end" id="navbarNav">
          <div className="d-flex gap-3">
            <button className="btn btn-warning text-black px-4 py-2 rounded-pill" style={{ backgroundColor: "#FFE600", borderRadius: "15px" }}>
              Preciso de Ajuda
            </button>
            <button className="btn btn-warning text-black px-4 py-2 rounded-pill" style={{ backgroundColor: "#FFE600", borderRadius: "15px" }}>
              Quero Oferecer Serviços
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
