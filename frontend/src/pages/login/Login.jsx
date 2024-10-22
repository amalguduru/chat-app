const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 bg-gray-400 rounded-lg shadow-md w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Login <span className="text-red-400">Telegram</span>
        </h1>
        <form>
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
            />
          </div>

          <a
            href="#"
            className="text-sm text-gray-600 hover:text-red-500 hover:underline mt-4 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-sm mt-3 w-[96%] h-10 text-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
