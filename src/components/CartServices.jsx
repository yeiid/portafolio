"use client";
import Image from "next/image";

import { useState } from "react";

export function CartServices({ services__title, image, info, href, parrafo }) {
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
        <span className="services__button" onClick={toggleModal}>
          <i className="services__button_icon">View more </i>
        </span>

        <div className={`services__modal ${isModalOpen ? "active-modal" : ""}`}>
          <div className="services__modal-content">
            <i className="services__modal-close" onClick={toggleModal}>
              X
            </i>
            <section className="flex flex-col items-center">
              <h2>Diseño web </h2>
              <div className=" flex  py-2">
                <Image className="px-2" src={image} width={400} height={400} />
              </div>
              <h2>Sobre el Proyecto</h2>

              <div className="flex  px-2">
                <p>{info}</p>
              </div>

              <div className="flex py-5">
                <a href={href}> {parrafo}</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
