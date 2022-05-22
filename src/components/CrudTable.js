import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  console.log(`Data is: ${data}`);

  return (
    <div>
      <h3>Table</h3>
      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Url</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <td colSpan="3">No data</td>
          ) : (
            data.map((element) => (
              <CrudTableRow
                key={element.id}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
