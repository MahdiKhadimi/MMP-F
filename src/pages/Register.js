import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const schema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    passsword: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.passsword === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = () => {
    toast.success("Account creatd");
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow rounded p-6 w-full max-w-md bg-white"
      >
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <div className="mb-2">
          <label> Name</label>
          <input {...register("name")} className="w-full rounded border p-2" />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label> Email</label>
          <input {...register("email")} className="w-full rounded border p-2" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label> Password</label>
          <input
            {...register("passsword")}
            className="w-full rounded border p-2"
          />
          {errors.passsword && (
            <p className="text-red-500 text-sm">{errors.passsword.message}</p>
          )}
        </div>

        <div className="mb-2">
          <label>Confirm Password</label>
          <input
            {...register("confirmPassword")}
            className="w-full rounded border p-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white border rounded py-2 hover:bg-green-700 "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
