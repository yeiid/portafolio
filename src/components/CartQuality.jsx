



export function CartQuality({ title, subtitle,calender }) {
  return (
    <>

        <div>
          <h3 className="qualication__title"> {title}</h3>
          <span className="qualication__subtitle">{subtitle}</span>
          <div className="qualication__calender">
            <i className="uil uil-calender-alt"></i>
            {calender}
          </div>
        </div>

    </>
  );
}
