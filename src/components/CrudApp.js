import React, { Fragment, useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { v4 as uuidv4 } from "uuid";

const techs = [
  {
    id: 1,
    name: "React",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: 2,
    name: "Angular",
    url: "https://angular.io/docs",
  },
  {
    id: 3,
    name: "Vue.js",
    url: "https://vuejs.org/guide/introduction.html",
  },
];

const CrudApp = () => {
  const [frameworks, setFrameworks] = useState(techs);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = uuidv4();
    setFrameworks([...frameworks, data]);
  };
  const updateData = (data) => {
    const updatedList = frameworks.map((tech) =>
      tech.id === data.id ? data : tech
    );
    setFrameworks(updatedList);
  };

  const deleteData = (id) => {
    const confirmation = window.confirm(
      `Do you wanna delete the register with id= ${id}`
    );
    if (!confirmation) return;
    const updatedList = frameworks.filter((tech) => tech.id !== id);
    setFrameworks(updatedList);
  };
  return (
    <Fragment>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={frameworks}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </Fragment>
  );
};

export default CrudApp;
