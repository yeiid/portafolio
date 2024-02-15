
import "./services.css";
// import { CartServices } from "@/components/CartServices";
import { CartServices } from "../../components/CartServices";
const Services = () => {

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Proyects</h2>
        <span className="section__subtitle">my proyects</span>

        <div className="services__container container grid">
            <CartServices
                // modal-title='Eccomers'
                services__title="Eccomers"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            <CartServices 
                modal-title='Product Designer'
                services__title="Encriptador-Alura-Oracle-ONE"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            <CartServices
                modal-title='Product Designer'
                services__title="Flora-Guajira "
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            {/* <CartServices
                modal-title='Product Designer'
                services__title="Product  Designer"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            /> */}

        </div>
    </section>
  );
};

export default Services;
