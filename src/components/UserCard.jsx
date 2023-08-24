const UserCard = ({ user, deleteUser, handleUpdateUsers }) => {
  return (
    <article className="border-[1px] border-[#E5E5E5]">
      <ul>
        <li className="text-[#0F0F2D] text-center p-1 font-semibold text-lg">
          {user.first_name} {user.last_name}
        </li>
        <hr />
        <li className="grid m-3 text-sm">
          <span className="text-[#D3D3D3]">CORREO</span>
          {user.email}
        </li>

        <li className="grid m-3 text-sm">
          <span className="text-[#D3D3D3]">CUMPLEAÑOS</span>
          <div className="flex">
            <i className='bx bx-gift flex justify-center items-center'></i>
            {user.birthday}
          </div>
          
        </li>
      </ul>
      <hr />
      <div className="p-3 flex justify-end gap-2">
        <button className="bg-[#D85D5D] text-white p-2" onClick={() => deleteUser(user.id)}><i className='bx bx-trash' ></i></button>
        <button className="ml-2 bg-[#BDBDBD] text-[#D3D3D3] p-2" onClick={() => handleUpdateUsers(user)}><i className='bx bxs-pencil'></i></button>
      </div>
    </article>
  );
};
export default UserCard;
