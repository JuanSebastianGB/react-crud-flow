import React, { useEffect, useState } from "react";

const initialForm = {
  name: "",
  url: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.url) {
      alert("Data required");
      return;
    }

    if (!form.id) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div>
      {dataToEdit ? "Edit" : "Insert"}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="url"
          onChange={handleChange}
          value={form.url}
          placeholder="Url"
        ></input>
        <input type="submit" value="send" />
        <input type="reset" value="Clean" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
