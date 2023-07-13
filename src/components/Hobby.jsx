import React from 'react'
import HobbyItem from './HobbyItem'


const data =[
    {
        year: 2020,
        title: "Programmar",
        duration: "1 Years",
        details:
         "Programming is the process of writing, testing, and maintaining sets of instructions (code) that a computer can execute to perform specific tasks or solve problems. It involves using programming languages to communicate with computers and create software applications, websites, games, and more  "
    },
    {
      year: 2021,
      title: "Full Stack Developer",
      duration: "2 Years",
      details:
       " These are used to store and manipulate data within a program. Variables have a specific data type (e.g., numbers, strings, booleans) and can hold different values throughout the execution of a program"
    },
    {
      year: 2022,
      title: "Designer",
      duration: "2 Years",
      details:
      "These are used to organize and store collections of data efficiently. Examples include arrays, linked lists, stacks, queues, and trees, which enable programmers to manage and manipulate data effectively. "
    },
    {
      year: 2023,
      title: "Hacker",
      duration: "4 Years",
      details:
      "This is a programming paradigm that emphasizes the organization of code around objects, which are instances of classes. OOP allows for code reusability, encapsulation, and modularity. "
    }
];

const Hobby = () => {
  return (
    <div id='work' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className=' text-4xl font-bold text-center text-[#001b5e] mb-10'>Hobby</h1>
      {data.map((item,idx)=>(
        <HobbyItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      ))}
    </div>
  )
}

export default Hobby
