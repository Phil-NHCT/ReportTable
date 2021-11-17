const TableRow = (props) => {
  return props.data.map((item, key) => {
    return <td key={key}>{item}</td>;
  });
};

export default TableRow;
