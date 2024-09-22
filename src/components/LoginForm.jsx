import { useForm } from "react-hook-form";
import { useState } from "react";
import { closeIcon } from "../assets/images";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { handleLogin } from "../apis/auth";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { login, signup } = useAuth();
  const [formtype, setFormtype] = useState("Sign Up");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const { setUser } = useAuth();
      const user = await handleLogin({ email, password });
      setUser(user);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="px-4 py-8 shadow-2xl rounded-2xl custom-input">
        <button className=" bg-white border-2 border-gray-400 rounded-full p-2">
          <img src={closeIcon} alt="" width={25} />
        </button>

        <div className="flex flex-col items-center justify-center gap-6 my-8">
          <p className="text-2xl font-bold">{`${formtype} to De Bukka`}</p>
          <span className="text-sm  text-center">
            {formtype === "Sign Up"
              ? " Have an account already?"
              : " Dont have an account?"}
            <span
              className="text-main_red font-bold"
              onClick={() => {
                formtype === "Sign Up"
                  ? setFormtype("Login")
                  : setFormtype("Sign Up");
              }}
            >
              {formtype === "Sign Up" ? " Login" : " Sign Up"}
            </span>
          </span>
        </div>

        <div className="min-h-96 px-8 py-6 mt-4 text-left  rounded-xl w-[90%] max-w-[500px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formtype === "Sign Up" && (
              <div className="input-wrapper">
                <input
                  {...register("fullname", {
                    required: "kindly provide your Full Name",
                  })}
                  placeholder="Full name"
                />
                {errors.fullname && (
                  <div className="text-main_red text-xs">
                    {errors.fullname.message}
                  </div>
                )}
              </div>
            )}

            <div className="input-wrapper">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please provide a valid email address",
                  },
                })}
                placeholder="Email"
                type="text"
              />
              {errors.email && (
                <div className="text-main_red text-xs">
                  {errors.email.message}
                </div>
              )}
            </div>

            {formtype === "Sign Up" && (
              <div className="input-wrapper">
                <input
                  {...register("phone_number")}
                  placeholder="Phone Number"
                  type="number"
                />{" "}
                {errors.phone_number && (
                  <div className="text-main_red text-xs">
                    {errors.phone_number.message}
                  </div>
                )}
              </div>
            )}

            <div className="input-wrapper">
              <input
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "password must be atleast 6 characters",
                  },
                })}
                placeholder="Password"
                type="password"
              />
              {errors.password && (
                <div className="text-main_red text-xs">
                  {errors.password.message}
                </div>
              )}
            </div>
            {formtype === "Sign Up" && (
              <div className="input-wrapper">
                <input
                  {...register("confirm_password", {
                    validate: (value) =>
                      value === getValues("password") ||
                      "passwords do not match",
                  })}
                  placeholder="Confirm Password"
                  type="password"
                />
                {errors.confirm_password && (
                  <div className="text-main_red text-xs">
                    {errors.confirm_password.message}
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              className="py-2 px-8 mt-5 bg-main_red  text-white w-full text-center  font-semibold shadow-md focus:outline-none rounded-lg cursor-pointer select-none"
            >
              {formtype}
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-500 text-center mt-10  w-full">
          By creating an account, you automatically accept our Terms of Services
          Privacy Policy and Cookies Policy
        </p>
      </div>
    </>
  );
};

export default LoginForm;
