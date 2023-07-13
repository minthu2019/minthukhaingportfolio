import React from 'react'
import GoalsItem from './GoalsItem'
import ProgrammerImage from '../assets/Programmer.jpg'
import HackerImage from '../assets/Hacker.jpg'
import DesignerImage from '../assets/Designer.jpg'
import FullstackDeveloperImage from '../assets/FullstackDeveloper.jpg'


const Goals = () => {
  return (
    <div id='Goals' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Goals</h1>
      <p className=' text-center py-8 '>A project typically involves a defined set of objectives, requirements, and deliverables that need to be completed within a specified timeframe.</p>
      <div className=' grid sm:grid-cols-2 gap-12'>
        <GoalsItem img={ProgrammerImage} title='Programmer'/>
        <GoalsItem img={HackerImage} title='Hacker'/>
        <GoalsItem img={DesignerImage} title='Designer'/>
        <GoalsItem img={FullstackDeveloperImage} title='FullstackDeveloper'/>
      </div>
    </div>
  )
}

export default Goals
