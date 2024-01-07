
import "./services.css";
import { CartServices } from "@/components/CartServices";

const Services = () => {

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <CartServices
                modal-title='Product Designer'
                services__title="Product  Designer"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            <CartServices
                modal-title='Product Designer'
                services__title="Product  Designer"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            <CartServices
                modal-title='Product Designer'
                services__title="Product  Designer"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />
            <CartServices
                modal-title='Product Designer'
                services__title="Product  Designer"
                modal-descriptiom="Service with more than 3 years of experience.Providing quality work to clients and companies.</p>
                    "
            />

        </div>
    </section>
  );
};

export default Services;
