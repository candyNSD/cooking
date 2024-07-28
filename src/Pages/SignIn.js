import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const SignIn = () => {

  const navigate = useNavigate()

  const[eUsername,setEusername] = useState("")
  const[ePassword,setEpassword] = useState("")
  const [rUser,setRuser] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user,setUser] =useState([])

    const handleuserInput = (e) => {
        setEusername(e.target.value)
    }
    const handlepassInput = (e) => {
        setEpassword(e.target.value)
    }
    const handleConfirmPassInput = (e) => {
      setConfirmPassword(e.target.value);
    };

    const addUser = () => {
      if(ePassword !== confirmPassword) {
        setRuser(false);
        return;
      }
        setUser([...user,{username:eUsername,password:ePassword}])
        navigate("/")
    }

    return (
    <div>
      <div className="bg-[#f9a8d4] p-10">
    <div className="bg-[#fff] p-10 border rounded-md flex justify-evenly items-center">
      <div>
      <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Signup Here :)</p>
        
        <div className="flex flex-col gap-2 my-2">
            <input type="text" onChange={handleuserInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="UserName" />
            <input type="text" onChange={handlepassInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="Password" />
            <input type="text" onChange={handleConfirmPassInput} className="w-52 border-black p-1  bg-transparent border rounded-md " placeholder="confirm Password" />
            <button className="bg-[#f472b6] w-24 p-1 rounded-md" onClick={addUser}>Sign up</button>
            <p>Don't have an account? <Link to={"/Login"} className="underline">Login</Link> </p>
        </div>
        {!rUser && <p className="text-red-600">Passwords do not match</p>}
      </div>
        
        <div>
      <img src="/assest/img/open.webp" alt="" style={{width:"500px"}} />
    </div>
    </div>
    
</div>

</div>
  )
}
