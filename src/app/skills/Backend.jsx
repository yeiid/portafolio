import { CartSkill } from "../../components/CartSkill";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <CartSkill name="MongoDB" level="Basic" />
          <CartSkill name="NodeJs" level="Basic" />
          <CartSkill name="Python" level="Basic" />
        </div>
        {/* <div className="skills__group">

        <CartSkill name="MySQL" level= "Basic" />
        <CartSkill name="Firebase" level= "BaIntermediatesic" />
        <CartSkill name="Django" level= "Basic" />
      </div> */}
      </div>
    </div>
  );
};

export default Backend;
