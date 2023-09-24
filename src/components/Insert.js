import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function Insert() {
  const [value, setvalue] = useState({
    id: "",
    name: "",
    language:"",
    framework: ""
  });
  const{id, name, language, framework} = value;
  //handleinput method is use to handle event and store data what we are typing on insertion form.
  const handleInput = (event) => {
    setvalue(
      {...value,
      [event.target.name]: event.target.value},
    );
  };

  //this method will trigger when we click insert buttoon.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    //axios use to connect frontend with backend and passing also value(it contains data of form) to backend.
    Axios.post("http://localhost:8070/user/", value)
      .then((res) => {
        console.log(res.data);
        if (res.data === "Error") {
          alert("Already Same data is present in the table");
        } else {
          alert("Data inserted successfully");
          setvalue(
            {
              id: "",
              name: "",
              language:"",
              framework: ""
            }
          );
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded">
        <h1>
          <center>Data Insert</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">UserId</label>
            <input
              type="text"
              placeholder="Enter UserID"
              className="form-control rounded-0"
              name="id"
              onChange={handleInput}
              value={id}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">User Name</label>
            <input
              type="text"
              placeholder="Enter User Name"
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
              value={name}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Language</label>
            <input
              type="text"
              placeholder="Enter Language"
              className="form-control rounded-0"
              name="language"
              onChange={handleInput}
              value={language}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeName">Framework</label>
            <input
              type="text"
              placeholder="Enter framework"
              className="form-control rounded-0"
              name="framework"
              onChange={handleInput}
              value={framework}
              required
            ></input>
          </div>
          <div className="d-flex gap-5">
            <button type="submit" className="btn btn-success w-100">
              Insert Data
            </button>
            <Link
              to="/getAll"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
            >
              Get All Record
            </Link>
            <Link
              to="/search"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
            >
              Search Record
            </Link>
            <Link
              to="/delete"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
            >
              Delete Record
            </Link>
            <Link
              to="/update"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
            >
              update Record
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
