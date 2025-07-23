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
    <div className="flex items-center justify-center theme-bg h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 form-label">Register</h2>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input {...register("name")} className="form-element w-full" />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input {...register("email")} className="form-element w-full" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <input
            {...register("passsword")}
            className="form-element w-full"
          />
          {errors.passsword && (
            <p className="text-red-500 text-sm">{errors.passsword.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            className="form-element w-full"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white border rounded py-2 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
