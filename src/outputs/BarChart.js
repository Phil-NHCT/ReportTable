import React from "react";

const BarChart = (props) => {
  return (
    <div class="col border rounded">
      <div class="row">
        <div class="chartSection col-lg-1"></div>

        <div
          class="col-lg-2 chartSection displayKeyChart hide"
          id="barChartKey"
        >
          <p class="chartKey chartKeySafe">
            Estimate of the risk not occurring:{" "}
            <span class="KeySafeValue">0</span>%
          </p>
          <p class="chartKey chartKeyRisk">
            <span class="keyRisk1Text">Patient Risk: </span>{" "}
            <span class="KeyRiskValue">0</span>%
          </p>
          <p class="chartKey chartKeySub subDisplay">
            <span class="keySubText">Sub risk: </span>{" "}
            <span class="KeySubValue">0</span>%
          </p>
          <p class="chartKey chartKeyRisk2 risk2Display">
            <span class="keyRisk2Text">Risk 2: </span>{" "}
            <span class="KeyRisk2Value">0</span>%
          </p>
        </div>

        <div class="chartSection col-lg-7 hide" id="displayBarChart">
          <div class="chart" id="scaleLeft"></div>
          <div class="chart" id="safeBar"></div>
          <div class="chart" id="riskBar"></div>
          <div class="chart subDisplay" id="subBar"></div>
          <div class="chart risk2Display" id="risk2Bar"></div>
          <div class="chart" id="scaleRight"></div>
        </div>

        <div class="chartSection col-lg-2"></div>
      </div>
    </div>
  );
};

export default BarChart;
