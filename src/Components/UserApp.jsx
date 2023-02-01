import React, { useState } from "react";
import { useEffect } from "react";
import UserList from "./UserList";
import Axios from "axios";
import UserDetails from "./UserDetails";

const UserApp = () => {
  const [user, setUser] = useState({});
  const [selUser, setSelUser] = useState({});
  const selectedUser = (user) => {
    setSelUser(user);
    console.log(user.firstName)
  };
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* <pre>{JSON.stringify(user)}</pre> */}
          <div className="col-md-8">
            {Object.keys(user).length > 0 ? (
              <>
                <UserList users={user.users} sel={selectedUser} />
              </>
            ) : null}
          </div>
          <div className="col-md-4">
            {Object.keys(selUser).length > 0 ? (
              <>
                <UserDetails details={selUser}/>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserApp;
