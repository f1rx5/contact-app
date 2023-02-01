import React from "react";

const UserList = (props) => {
  let selUserHandler = (user) =>{
    props.sel(user)
  }
  return (
    <>
      <div className="row">
        {/* <pre>{JSON.stringify(props.users)}</pre> */}
        <div className="col">
        <h1>USER LIST</h1>
          <table className="table table-hover">
            <thead className="bg-primary text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                  props.users.map((user)=>{
                    return <tr key={user.id} onMouseOver={selUserHandler.bind(this,user)}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.gender}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
