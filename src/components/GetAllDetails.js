import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/GetAll.css";
export default function GetAllDetails() {
  const [status, setstatus] = useState(false);

  //use usestate here to store employee current state in employeelist and update using setemployeelist..
  const [employeelist, setemployeelist] = useState([]);

  //this method will trigger when we click on get all record  button..
  const handleSubmit = (event) => {
    event.preventDefault();
    setstatus(!status);

    //use axios to connct frontend with backend.
    axios
      .get("http://localhost:8070/user/")
      .then((res) => setemployeelist(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-1/3">
        <form action="" onClick={handleSubmit}>
          {!status ? (
            <button type="submit" className="btn btn-success">
              GET All Record
            </button>
          ) : (
            ""
          )}
        </form>
        {status ? (
          <table className="hello">
            <tr className="hello">
              <th className="hello">UserID</th>
              <th className="hello">User Name</th>
              <th className="hello">Language</th>
              <th className="hello">Framework</th>
            </tr>

            {employeelist.map((val, key) => {
              return (
                <tr className="hello">
                  <td className="hello">{val.id}</td>
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.language}</td>
                  <td className="hello">{val.framework}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          ""
        )}
        {status ? (
          <Link
            to="/"
            type="submit"
            className="btn btn-success border w-50 rounded-10 m-10 mt-2"
          >
            Back
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
