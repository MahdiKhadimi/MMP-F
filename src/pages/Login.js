import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext, useAuth } from "../context/AuthContext";
import { useContext } from "react";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    toast.success("You have successfully login");
    login({ email: data.email });
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-center bg-green-50 h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shodow rounded w-full max-w-md bg-white p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label>Email</label>
          <input
            {...register("email")}
            className="w-full rounded border p-2 "
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            {...register("password")}
            className="w-full rounded border p-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full rounded text-white py-2 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
