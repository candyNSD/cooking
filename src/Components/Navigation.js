import React from 'react'
import { Link, useNavigate} from 'react-router-dom';


const navText = [
    {name:"Home",path:"/"},
    {name:"Recipes",path:"/recipes"},
    {name:"Search",path:"/search"},
    { name: "Contacts", path: "/contacts" }
];


export const Navigation = () => {

    const navigate = useNavigate()

    const loginClick = () => {
        navigate("/Login")
    }
    

  return (
    <div>
        <div className='flex justify-between items-center p-10lex justify-between items-center sticky top-0 bg-white z-50 shadow-md p-5'>
            <div>
                <a href="#"><img src="/assest/img/logo.png" alt="" /></a>
            </div>
            <div className='flex gap-3 justify-around items-center'>
            <ul className='nax-li flex gap-10 text-2xl font-bold' >
                    {navText.map((item, index) => (
                            <li key={index} style={{color:"#565252"}}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                </ul>
                <button className='bg-pink-400 font-bold w-20 h-10 rounded-lg text-[#565252] text-xl' onClick={loginClick}>Login</button>

            </div>
        </div>
    </div>
  )
}
