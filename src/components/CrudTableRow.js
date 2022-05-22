import React, { Fragment } from "react";

const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  const { name, url, id } = element;

  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{url}</td>
        <td>
          <button onClick={() => setDataToEdit(element)}>Edit</button>
          <button onClick={() => deleteData(id)}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CrudTableRow;
