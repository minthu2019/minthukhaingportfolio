import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form action="https://getform.io/f/7717bb07-7ff6-486c-a2ed-805fcb3a99a5" method='POST' encType='multipart/form-data'>
        <div className=' grid grid-cols-2 gap-4 w-full py-3'>
          <div className='flex flex-col'>
            <label className=' uppercase text-sm py-2'>Name</label>
            <input className=' border-2 rounded-lg p-3 flex border-gray-400' type="text" name='Name' required/>
          </div>
          <div className='flex flex-col'>
            <label className=' uppercase text-sm py-2'>Phone</label>
            <input className=' border-2 rounded-lg p-3 flex border-gray-400' type="text" name='Phone' required/>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className=' uppercase text-sm py-2'>Email</label>
          <input className=' w-full border-2 border-gray-400 p-3 rounded-lg' type="email" name="Email"  required/>
        </div>
        <div className='flex flex-col'>
          <label className=' uppercase text-sm py-2'>Subject</label>
          <input className=' w-full border-2 border-gray-400 p-3 rounded-lg'  type="text" name="Subject"  required/>
        </div>
        <div className='flex flex-col'>
          <label className=' uppercase text-sm py-2'>Message</label>
          <textarea className=' w-full border-2 border-gray-400 p-3 rounded-lg'  name="Message" rows="10" required></textarea>
        </div>
        <button className=' w-full bg-[#001b5e] mt-10 py-3 rounded-lg'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
