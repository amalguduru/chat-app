import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleChangeGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 bg-gray-400 rounded-lg shadow-md w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign up <span className="text-red-400">Telegram</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 mt-2">
              <span className="text-base label-text text-gray-600">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Donald Trump"
              className="input h-10 input-bordered w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-600">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="donaldtrump123"
              className="input h-10 input-bordered w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-600">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input h-10 input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-600">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Re-enter the password"
              className="input h-10 input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className="flex mt-4 gap-2">
            <div className="form-control">
              <label
                className={`label gap-2 cursor-pointer ${
                  inputs.gender === "male" ? "selected" : ""
                }`}
              >
                <span className="label-text text-gray-600">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 bg-slate-300"
                  checked={inputs.gender === "male"}
                  onChange={() => handleChangeGender("male")}
                />
              </label>
            </div>
            <div className="form-control">
              <label
                className={`label gap-2 cursor-pointer ${
                  inputs.gender === "female" ? "selected" : ""
                }`}
              >
                <span className="label-text text-gray-600">Female</span>
                <input
                  type="checkbox"
                  className="checkbox border-slate-900 bg-slate-300"
                  checked={inputs.gender === "female"}
                  onChange={() => handleChangeGender("female")}
                />
              </label>
            </div>
          </div>

          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-red-500 hover:underline mt-3 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-sm mt-3 w-[96%] h-10 text-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
