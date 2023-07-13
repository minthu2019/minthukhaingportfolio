import React,{useState} from 'react';
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject,AiOutlineMail, AiFillCloseCircle} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';



const Sidenav = () => {

    const [nav, setNav] = useState(false); // that is main nav
    const handlenav = ( ) => {
        setNav(!nav) // "!"that is not logical.So ,clike like time !nav ka main nav ko a myal nyin so nay mal
    }

    const HandleClick =() => {
        setNav(false)
    }
  return (
    <div>
     
      {
        nav ? (
            <div className=' fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <AiFillCloseCircle onClick={handlenav} className='fixed top-4 right-4 z-[99] md:hidden'/>
                        <a href="#main"  onClick={HandleClick} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size = {20}/> 
                            <span className=' pl-4'>Home</span>
                        </a>        
                        <a href="#work" onClick={HandleClick} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size = {20}/> 
                            <span className=' pl-4'>Work</span>
                        </a>   
                        <a href="#Goals" onClick={HandleClick} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size = {20}/> 
                            <span className=' pl-4'>Projects</span>
                        </a>  
                        <a href="#main" onClick={HandleClick} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size = {20}/> 
                            <span className=' pl-4'>Resume</span>
                        </a>
                        <a href="#contact" onClick={HandleClick} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size = {20}/> 
                            <span className=' pl-4'>Contact</span>
                        </a>
            </div>
        )
        :(
            <div> 
                <AiOutlineMenu onClick={handlenav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            </div> 
        )}

        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col '>
                <a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#work" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                </a>
                <a href="#Goals" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20}/>
                </a>
                <a href="#contact" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidenav
