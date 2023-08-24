import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { resetForm } from "../shared/constants";

const UsersForm = ({
  isShowModal,
  setIsShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  setIsUserToUpdate
}) => {
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    if (isUserToUpdate) {
      updateUser(data, reset);
    } else {
      createUser(data, reset);
    }
  };

  const handleCloseModal = () =>{
    setIsShowModal(false)
    reset(resetForm)
    setIsUserToUpdate(null)
  }

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`fixed bg-[#212121]/[0.3] top-0 bottom-0 right-0 
    left-0 flex justify-center items-center transition-transform duration-200${
      isShowModal ? "visible scale-100" : "invisible scale-0"
    }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white grid gap-4 p-6 relative text-[#0F0F2D]"
      >
        <h2 className=" font-bold text-lg">{isUserToUpdate ? "Editar usuario" : "Nuevo usuario"}</h2>
        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute right-2 mt-2"
        >
          <i className="bx bx-x"></i>
        </button>

        <div className="grid">
          <label htmlFor="first_name" className="text-sm">Nombre</label>
          <input
            className="outline-none border-[1px] border-[#C3C1C] bg-[#F9FAFC] p-1"
            id="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="last_name" className="text-sm">Apellidos</label>
          <input
            className="outline-none border-[1px] border-[#C3C1C] bg-[#F9FAFC] p-1"
            id="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid">
          <label htmlFor="email" className="text-sm">Correo</label>
          <input
            className="outline-none border-[1px] border-[#C3C1C] bg-[#F9FAFC] p-1"
            id="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="grid">
          <label htmlFor="password" className="text-sm">Contraseña</label>
          <input
            className="outline-none border-[1px] border-[#C3C1C] bg-[#F9FAFC] p-1"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="grid">
          <label htmlFor="birthday" className="text-sm">Cumpleaños</label>
          <input
            className="outline-none border-[1px] border-[#C3C1C] bg-[#F9FAFC] p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className="bg-[#555A88] text-white py-1 px-5 mt-3">
          {isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};
export default UsersForm;
