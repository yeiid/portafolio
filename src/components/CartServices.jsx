"use client";

import { Li_ } from "./Components";
import { useState } from "react";

export function CartServices({
  services__title,
  modal__title,
  modal__descriptiom,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Clearer naming for toggle state

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <>
      <div className="services__content">
        <div>
          <i className="services__icon"></i>
          <h3 className="services__title">{services__title}</h3>
        </div>
        <span
          className="services__button"
          onClick={toggleModal}>
          <i className="services__button_icon">View more </i>
        </span>

        <div className={`services__modal ${isModalOpen ? "active-modal" : ""}`} >
          <div className="services__modal-content">
            <i className="services__modal-close" onClick={toggleModal}>X</i>
            
            {/* <h3 className="services__modal-title">{modal__title}</h3> */}
            <p className="services__modal-descriptiom">{modal__descriptiom}</p>
            <ul className="services__modal-services grid">
              <Li_ modal__info="I develop the user interface." />
              <Li_ modal__info="diseño de interdaces." />
              <Li_ modal__info="I Web page development." />
              <Li_ modal__info="I I create ux element interactions." />
              <Li_ modal__info="I I I position your company brand." />
              <Li_ modal__info="I I I Design and mockups of products for companies." />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
