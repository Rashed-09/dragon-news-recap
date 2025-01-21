import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <h2 className="text-xl font-medium">LogIn With</h2>
      <div className="space-y-3 mt-3">
        <button className="w-full border-2 border-blue-700 flex items-center justify-center py-2 gap-3 rounded">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="w-full border-2 border-slate-600 flex items-center justify-center py-4 gap-3 rounded">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default Login;
