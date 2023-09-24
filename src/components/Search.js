import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Search() {
  const [status, setstatus] = useState(false);
  const [statusid, setstatusId] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [value, setvalue] = useState("");
  const handleInput = (event) => {
    setvalue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setstatus(!status);
    axios
      .get(`http://localhost:8070/user/usersName/${value}`)
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  };

  const handleInputId = (event) => {
    setvalue(event.target.value);
  };
  const handleSubmitID = (event) => {
    event.preventDefault();
    setstatusId(!statusid);
    axios
      .get(`http://localhost:8070/user/users/${value}`)
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="d-flex justify-content-center gap-5 align-items-center bg-primary vh-100">
      {!status ? (
        <div className="bg-white p-3 rounded w-1/4">
          <h1>
            <center>Search Data</center>
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="employeeName">User Name</label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="form-control rounded-0"
                name="name"
                onChange={handleInput}
              ></input>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Search Data
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-3 rounded w-1/3">
          <table className="hello">
            <tr className="hello">
              <th className="hello">User ID</th>
              <th className="hello">User Name</th>
              <th className="hello">Framework</th>
              <th className="hello">Language</th>
            </tr>

            {studentList.map((val, key) => {
              return (
                <tr className="hello">
                  <td className="hello">{val.id}</td>
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.framework}</td>
                  <td className="hello">{val.language}</td>
                </tr>
              );
            })}
          </table>
          <Link
            to="/"
            type="submit"
            className="btn btn-success border rounded-10 m-10"
          >
            Back
          </Link>
        </div>
      )}

      {!statusid ? (
        <div className="bg-white p-3 rounded w-1/4">
          <h1>
            <center>Search Data</center>
          </h1>
          <form action="" onSubmit={handleSubmitID}>
            <div className="mb-3">
              <label htmlFor="employeeName">User Id</label>
              <input
                type="text"
                placeholder="Enter User Id"
                className="form-control rounded-0"
                name="name"
                onChange={handleInputId}
              ></input>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Search Data
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-3 rounded w-1/3">
          <table className="hello">
            <tr className="hello">
              <th className="hello">User ID</th>
              <th className="hello">User Name</th>
              <th className="hello">Framework</th>
              <th className="hello">Language</th>
            </tr>

            {studentList.map((val, key) => {
              return (
                <tr className="hello">
                  <td className="hello">{val.id}</td>
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.framework}</td>
                  <td className="hello">{val.language}</td>
                </tr>
              );
            })}
          </table>
          <Link
            to="/"
            type="submit"
            className="btn btn-success border rounded-10 m-10"
          >
            Back
          </Link>
        </div>
      )}

    </div>
    </>
  );
}
