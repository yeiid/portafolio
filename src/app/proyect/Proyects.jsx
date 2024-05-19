import { CartServices } from "../../components/CartServices";

const Services = () => {
  return (
    <section className="m-8 mb-16 bg-white bg-opacity-40">
      <h2 className="section__title text-3xl font-bold text-center mb-4">Projects</h2>
      <span className="section__subtitle text-lg text-center block mb-8">My projects</span>

      <div className="services__container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="Cart1">
          <CartServices
            services__title="Ecommerce"
            image="/jamuche.png"
            info="Projecto del curso de Oracle con Alura Latam"
            href="https://encriptador-alura-oracle-one.vercel.app/"
            parrafo="LINK: https://encriptador-alura-oracle-one.vercel.app/"
          />
        </div>
        <div className="Cart2">
          <CartServices
            services__title="Encriptador-Alura-Oracle-ONE"
            image="/encriptardor.png"
            info="Projecto del curso de Oracle con Alura Latam"
            href="https://encriptador-alura-oracle-one.vercel.app/"
            parrafo="LINK: https://encriptador-alura-oracle-one.vercel.app/"
          />
        </div>
        <div className="Cart3">
          <CartServices
            services__title="ECORAICES"
            image="/ecoraices-web-registro.png"
            info="Bienvenidos a EcoRaices, la plataforma que busca geolocalizar y documentar las 
            especies arbóreas"
            href="https://ecoraices-proyect.vercel.app/"
            parrafo="LINK: https://ecoraices-proyect.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
