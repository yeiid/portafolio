"use client";
import Image from "next/image";
import { useState } from "react";

export function CartServices({ services__title, image, info, href, parrafo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="services__content bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-between h-full">
        <Image
          className="cursor-pointer mb-4"
          src={image}
          width={300}
          height={300}
          alt={services__title}
          onClick={toggleModal}
        />
        <h3 className="services__title text-2xl font-semibold mb-2">
          {services__title}
        </h3>
        <button
          className="services__button text-blue-500 cursor-pointer"
          onClick={toggleModal}
        >
          View more
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="services__modal-content bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-auto relative">
              <button
                className="services__modal-close text-red-500 absolute top-2 right-2 text-xl"
                onClick={toggleModal}
              >
                &times;
              </button>
              <section className="flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Diseño web</h2>
                <div className="flex py-2">
                  <Image
                    className="px-2"
                    src={image}
                    width={400}
                    height={400}
                    alt={services__title}
                  />
                </div>
                <h2 className="text-lg font-semibold mt-4 mb-2">
                  Sobre el Proyecto
                </h2>
                <div className="flex px-2">
                  <p>{info}</p>
                </div>
                <div className="flex py-5">
                  <a href={href} className="text-blue-500 underline">
                    {parrafo}
                  </a>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
