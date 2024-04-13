
import "./services.css";
// import { CartServices } from "@/components/CartServices";
import { CartServices } from "../../components/CartServices";


const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Proyects</h2>
      <span className="section__subtitle">my proyects</span>

      <div className="services__container container grid">
        <div className="Cart1">
          <CartServices
            // modal-title='Eccomers'
            services__title="Eccomers"

          />
        </div>
        <div className="Cart2">
          <CartServices
            services__title="Encriptador-Alura-Oracle-ONE"
            image= "/encriptardor.png"
            info= "Projecto del curos de Oracle con alura latam"
            href= "https://encriptador-alura-oracle-one.vercel.app/"
            parrafo = " LINK : https://encriptador-alura-oracle-one.vercel.app/"
          />
        </div> 
        <div className="Cart3">
        <CartServices
          services__title="ECORAICES"
          image= "/ecoraices-web-registro.png"
          info= "Bienvenidos a EcoRaices, la plataforma que busca geolocalizar y documentar las especies arbóreas presentes en las zonas urbanas de los municipios guajiros"
          href= "https://ecoraices-proyect.vercel.app/"
          parrafo = " LINK : https://ecoraices-proyect.vercel.app/"
        />
      </div>
      </div>
    </section>
    
  );
};

export default Services;
