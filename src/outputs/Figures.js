import React from "react";
import style from "./figures.module.css";

const Figures = (props) => {
  return (
    <div className="col border rounded">
      <div className="row">
        <div className="col col-md-2"></div>
        <div className="col col-md-8d-print-inline-block">
          <div className="alert alert-primary m-4">
            <strong>
              Enter some risk percentages above to display graphics.
            </strong>
          </div>
        </div>

        <div className="col col-md-2 d-print-inline-block">
          <div className={style.graphicKey}>
            Risk not occuring{" "}
            <div className={`${style.circle} ${style.noRisk}`}>
              <span className="KeySafeValue">{100 - props.risk1}</span>%
            </div>
            {props.label1}
            <div className={`${style.circle} ${style.risk1}`}>
              {props.risk1}%
            </div>
            {props.labelSub}
            <div className={`${style.circle} ${style.subRisk}`}>
              {props.risksub}%
            </div>
            {props.label2}
            <div className={`${style.circle} ${style.risk2}`}>
              {props.risk2}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
