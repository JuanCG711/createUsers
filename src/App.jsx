import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import { resetForm } from "./shared/constants";

const BASE_URL = "https://users-crud.academlo.tech/";
function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);

  console.log(users);

 const handleOpenModal = () => {
    setIsShowModal(true)
 }

  const handleUpdateUsers = (user) => {
    setIsShowModal(true);
    setIsUserToUpdate(user);
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(resetForm);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdated, reset) => {
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`, userUpdated)
      .then(() => {
        getAllUsers();
        setIsShowModal(false);
        reset(resetForm);
        setIsUserToUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="m-4 font-helvatica">
      <div className="flex justify-between ">
        <h2 className="text-xl text-[#0F0F2D] font-bold  flex justify-center items-center">Usuarios</h2>
        <button onClick={handleOpenModal} className="bg-[#555A88] text-white flex justify-center items-center p-2">
          <i className='bx bx-plus '></i>
          Crear nuevo usuario
        </button>
      </div>
      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleUpdateUsers={handleUpdateUsers}
      />
      <UsersForm
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        setIsUserToUpdate={setIsUserToUpdate}
      />
    </main>
  );
}

export default App;
