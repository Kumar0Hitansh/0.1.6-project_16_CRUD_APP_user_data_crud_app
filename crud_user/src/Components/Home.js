import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Home() {
  // GET METHOD fetch API----------------------------------
  const url = `http://localhost:4000/users`;
  const [users, setUsers] = useState([]);

  let getapi = () => {
    fetch(url).then((res) => {
      res.json().then((resp) => {
        setUsers(resp);
      });
    });
  };

  useEffect(() => {
    getapi();
  }, []);
  // GET METHOD fetch API----------------------------------

  // POST METHOD Add User input field---------------------

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [user_name, setusername] = useState("");
  const [Phone, setphone] = useState("");

  let adduser = () => {
    let obj = { name, email, user_name, Phone };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((reso) => {
      // console.log('POST : ' ,reso);
      getapi();
    });
  };

  // POST METHOD Add User input field---------------------

  // DELETE METHOD delete User input field---------------------

  let deleteuser = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    }).then((resul) => {
      resul.json().then((resp) => {
        // console.log(resp);
        getapi();
      });
    });
  };
  // DELETE METHOD delete User input field---------------------

  // PUT METHOD update User input field---------------------

  const [selectid, setselectid] = useState();
  const [selectname, setselectname] = useState("");
  const [selectemail, setselectemail] = useState("");
  const [selectusername, setselectusername] = useState("");
  const [selectphone, setselectphone] = useState("");

  // prefill edit user form input fields
  let updateuser = (id) => {
    setselectid(id);
    setselectname(users[id - 1].name);
    setselectemail(users[id - 1].email);
    setselectusername(users[id - 1].user_name);
    setselectphone(users[id - 1].Phone);
  };
  // prefill edit user form input fields

  let Putupdateuser = () => {
    setname(selectname);
    setemail(selectemail);
    setusername(selectusername);
    setphone(selectphone);

    // console.log('selected' , {selectid, selectname,selectemail,selectusername,selectphone } )

    // let put={ selectname,selectemail,selectusername,selectphone } ;
    let put = { name, email, user_name, Phone };

    fetch(`http://localhost:4000/users/${selectid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(put),
    }).then((resul) => {
      resul.json().then((resp) => {
        // console.log(resp);
        getapi();
      });
    });
  };

  // PUT METHOD update User input field---------------------

  return (
    <>
      <div className="container-fluid ">
        <br />
        <div className="row">
          <div className="col-sm-3   ">
            <Table striped bordered hover variant="dark" className="m-0 p-0">
              <thead>
                <tr className="text-start">
                  <th>Add User</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      value={name}
                      name="iname"
                      className="rounded-0"
                      type="text"
                      placeholder="Name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      value={email}
                      name="iemail"
                      className="rounded-0"
                      type="text"
                      placeholder="Email"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      value={user_name}
                      name="iusername"
                      className="rounded-0"
                      type="text"
                      placeholder="User_Name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      onChange={(e) => {
                        setphone(e.target.value);
                      }}
                      value={Phone}
                      name="iphone"
                      className="rounded-0"
                      type="text"
                      placeholder="Phone"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Button
                      className="w-75"
                      variant="success"
                      onClick={adduser}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg>  Add User
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />

            <Table striped bordered hover variant="dark" className="m-0 p-0">
              <thead>
                <tr className="text-start">
                  <th>Edit User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      onChange={(e) => setselectid(e.target.value)}
                      value={selectid}
                      className="rounded-0"
                      type="text"
                      placeholder="Id"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      onChange={(e) => setselectname(e.target.value)}
                      value={selectname}
                      className="rounded-0"
                      type="text"
                      placeholder="Name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={(e) => setselectemail(e.target.value)}
                      value={selectemail}
                      className="rounded-0"
                      type="text"
                      placeholder="Email"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={(e) => setselectusername(e.target.value)}
                      value={selectusername}
                      className="rounded-0"
                      type="text"
                      placeholder="User_Name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <Form.Control
                      onChange={(e) => setselectphone(e.target.value)}
                      value={selectphone}
                      className="rounded-0"
                      type="text"
                      placeholder="Phone"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <Button
                      className="w-75"
                      variant="warning"
                      onClick={Putupdateuser}
                    >
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>  Double click to Update User
                    </Button>
                    
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="col-sm-9  ">
            <Table striped bordered hover variant="dark" className="m-0 p-0">
              <thead>
                <tr className="text-start">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Name</th>
                  <th>Phone</th>
                  <th className="text-center">Operations</th>
                </tr>
              </thead>
              <tbody>
                {users.map((e) => (
                  <tr key={e.id} className="text-start">
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.user_name}</td>
                    <td>{e.Phone}</td>
                    <td className="d-flex justify-content-evenly">
                      <span>
                        <Button
                          className=""
                          variant="warning"
                          onClick={() => updateuser(e.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg> Edit
                        </Button>
                      </span>
                      <span>
                        <Button
                          className="rounded-circle"
                          variant="danger"
                          onClick={() => deleteuser(e.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </Button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
