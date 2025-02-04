import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const req = await axios.post('http://localhost:3000/api/user', value) 
      alert(req.response.data.message)
      navigate('/login')
    }
    catch(error){
      alert(error.response.data.message)
      navigate('/register')
    }
  };

  const handleChange = async(e) => {
    setValue({ ...value, [e.target.name]: e.target.value})
  };

  return (
    <div className="bg-slate-400 w-[700px] mt-8 p-4 rounded-md m-auto shadow-xl">
      <h1 className="text-3xl my-4 text-center">Registration</h1>
      <form
        className="flex flex-col gap-4 border-t-2 py-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            className="py-2 px-4 bg-slate-200 rounded-xl"
            type="text"
            value={value.name}
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="py-2 px-4 bg-slate-200 rounded-xl"
            type="email"
            value={value.email}
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="py-2 px-4 bg-slate-200 rounded-xl"
            type="password"
            value={value.password}
            name="password"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-amber-300 px-4 py-2 rounded-xl hover:scale-110 active:scale-105 duration-200">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
