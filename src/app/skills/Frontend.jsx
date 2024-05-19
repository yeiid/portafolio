// import {CartSkill} from '@/components/CartSkill'
import { CartSkill } from "../../components/CartSkill";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <CartSkill name="HTML" level="Advanced" />
          <CartSkill name="CSS" level="Advanced" />
          <CartSkill name="JavaScript" level="Advanced" />
        </div>
        <div className="skills__group">
          <CartSkill name="Tailwind" level="Advanced" />
          <CartSkill name="Git" level="Advanced" />
          <CartSkill name="React" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};
export default Frontend;
