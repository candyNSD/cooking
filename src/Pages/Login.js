import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState([]); 
  const [eUsername, setEusername] = useState("");
  const [ePassword, setEpassword] = useState("");
  const [rUser, setRuser] = useState(true);

  const handleuserInput = (e) => {
    setEusername(e.target.value);
  };

  const handlepassInput = (e) => {
    setEpassword(e.target.value);
  };

  const checkUser = () => {
    if (eUsername === 'emilys' && ePassword === 'emilyspass') {
      console.log("Login Successful");
      navigate("/", { state: { user: eUsername } });
    } else {
      console.log("Login failed");
      setRuser(false);
    }
  };

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const response = await axios.post(
          'https://dummyjson.com/user/login',
          {
            username: eUsername,
            password: ePassword,
          },
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log('Response data:', response.data);
      } catch (error) {
        console.error("Error fetching login data:", error);
      }
    };
  
    if (eUsername && ePassword) {
      fetchLogin();
    }
  }, [eUsername, ePassword]);

  return (
    <div className="bg-[#f9a8d4] p-10">
      <div className="bg-[#FFF] p-10 border rounded-md flex justify-evenly items-center">
        <div>
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {rUser ? (
          <p className="my-5">I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-600 my-3">Please sign up before you login</p>
        )}
        
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            onChange={handleuserInput}
            value={eUsername}
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="UserName"
          />
          <input
            type="password"
            onChange={handlepassInput}
            value={ePassword}
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
          />
          <button
            className="bg-[#f472b6] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/SignIn" className="underline">
              Signup
            </Link>
          </p>
        </div>
       
        </div>
        <div>
      <img src="/assest/img/open.webp" alt="" style={{width:"500px"}} />
    </div>
      </div>
     
    </div>
  );
};