import UserCard from "./UserCard";

const UsersList = ({ users, deleteUser, handleUpdateUsers }) => {
  return (
    <section className="grid gap-4 mt-10 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleUpdateUsers={handleUpdateUsers}
        />
      ))}
    </section>
  );
};
export default UsersList;
