import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const services = [
  "Manutenção Geral",
  "Reparos Hidráulicos",
  "Elétrica",
  "Pintura e Acabamento",
  "Tecnologia e Eletrônicos",
  "Jardinagem",
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="services-container">
      <div className="services-card">
        <h3 className="text-center mb-4">Principais Serviços</h3>
        <ul className="list-unstyled">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <button className="service-btn" onClick={() => toggleService(index)}>
                <span className="service-title">
                  <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                  {service}
                </span>
                <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="arrow-icon" />
              </button>
              {openIndex === index && (
                <div className="service-details">
                  <p>Mais informações sobre {service}...</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Services;
