import React from 'react'
import home from '../../assets/1.png';
import employeeLogo from '../../assets/2.jpg' 

const Home = () => {
  return (
    <div className='flex w-full min-h-[100vh]'>
        <div className=" bg-black bg-opacity-50 w-1/2 bg-cover bg-center h-screen" style= {{backgroundImage: `url(${home})`}}>
            <p className='text-slate-200 text-3xl text-center mt-20 font-bold font-mono'>This is Employee Management System</p>
        </div>
        

        <div className='w-1/2 flex items-center justify-center flex-col border-2'>
            <img className='w-56 h-40' src={employeeLogo}/>
            <input
            className='border border-slate-400 mt-3 h-10 w-72 focus:outline-blue-600 rounded-md'
            id='email'
            placeholder='email*'
            />

            <input
            className='border border-slate-400 mt-4 h-10 w-72 focus:outline-blue-600 rounded-md'
            id='password'
            placeholder='password*'
            />
            <p className='text-blue-500 hover:underline mr-40 mt-1 cursor-pointer'>Forgot Password?</p>

            <button className='h-10 w-72 bg-green-500 mt-2 rounded-sm shadow-md text-white  font-semibold hover:bg-blue-600'>Sign In</button>

            <div className='flex justify-center items-center space-y-2'>
                <div></div>
                <div className='w-32 h-0.5 bg-slate-400'></div>
                <span className='ml-2 mr-2'>OK</span>
                <div className='w-32 h-0.5 bg-slate-400'></div>
            </div>
            {/* <div className="bg-black w-6 h-0.5 my-1"></div> */}
        </div>
        
    </div>
  )
}

export default Home;