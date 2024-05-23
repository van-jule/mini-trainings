import React, { useEffect } from "react";
import "./users.scss";
import { Users } from "./Users";

export const Userslist = ({ users, setUsers, isLoading, setIsLoading }) => {
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error");
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log("users", users);
  return (
    <div className="container">
      <Users items={users} isLoading={isLoading} />
      {/* <Success />  */}
    </div>
  );
};
