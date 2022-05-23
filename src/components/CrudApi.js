import React, { Fragment, useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { v4 as uuidv4 } from 'uuid';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
  const [frameworks, setFrameworks] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = 'http://localhost:5000/frameworks';
  let api = helpHttp();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const frameworks = await helpHttp().get(url);

      if (!frameworks.err) {
        setFrameworks(frameworks);
        setError(null);
      } else {
        setFrameworks(null);
        setError(frameworks);
      }
    };
    fetchData();
    setLoading(false);
  }, [url]);

  const createData = async (data) => {
    data.id = uuidv4();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    const response = await api.post(url, options);
    if (response.err) {
      setError(response.err);
    } else {
      setFrameworks([...frameworks, data]);
    }
  };
  const updateData = async (data) => {
    const { id } = data;
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    const response = await api.put(`${url}/${id}`, options);
    if (response.err) {
      setError(response);
    } else {
      const updatedList = frameworks.map((tech) =>
        tech.id === data.id ? data : tech
      );
      setFrameworks(updatedList);
    }
  };

  const deleteData = async (id) => {
    const confirmation = window.confirm(
      `Do you wanna delete the register with id= ${id}`
    );
    if (!confirmation) return;
    const response = await api.del(`${url}/${id}`);
    if (response.err) {
      setError(response);
    } else {
      const updatedList = frameworks.filter((tech) => tech.id !== id);
      setFrameworks(updatedList);
    }
  };
  return (
    <Fragment>
      <article className="grid-1-2">
        <h3>CRUD API</h3>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {error && (
          <Message
            msg={`Error ${error.status}:${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {loading && <Loader />}

        {frameworks && (
          <CrudTable
            data={frameworks}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </Fragment>
  );
};

export default CrudApi;
