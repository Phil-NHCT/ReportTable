import React, { useState, useEffect } from "react";
//import Data from "./testData.json";
import TableRow from "./TableRow";
import "./Table.css";

const Table = () => {
  const tableHeader = {
    col1: "Occupation",
    col2: "(A) Number of HCWs involved in direct patient care on day of data extraction.",
    col3: "(B) Number in (A) vaccinated since 1st Oct 2020",
    col4: "(C) % in (A) vaccinated since 1st Oct 2020",
  };

  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  /*
  useEffect(() => {
    setTableData(Data);
    setIsLoading(false);
    setError(false);
  }, []);
*/

  const getDataRequest = async () => {
    const url = `http://api.nhct.nhs.uk/VaccineReports/loaddata.php`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setTableData(responseJson);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataRequest();
  }, []);

  const table = tableData.map((item, key) => {
    return (
      <tr key={key}>
        <TableRow data={item} />
      </tr>
    );
  });
  if (isLoading) {
    return (
      <div className="text-center">
        <h1>Data loading....</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center">
        <h1>There has been a problem loading data.</h1>
      </div>
    );
  }
  return (
    <div className="col rounded">
      <table className="table">
        <thead>
          <tr>
            <th>{tableHeader.col1}</th>
            <th>{tableHeader.col2}</th>
            <th>{tableHeader.col3}</th>
            <th>{tableHeader.col4}</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};

export default Table;
