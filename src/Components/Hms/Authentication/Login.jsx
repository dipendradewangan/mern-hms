import React, { useState } from 'react'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

const Login = () => {

    const [passVisible, setPassVisible] = useState(false)
    return (
        <div className='p-5 w-full bg-gray-100 h-screen flex flex-col justify-center items-center gap-3 sm:flex-col '>
            <div className='bg-white w-screen sm:w-96 rounded-lg shadow-inner'>
                <div className='flex justify-center flex-col items-center p-6 gap-6'>

                    {/* hospital heading part */}
                    <div className='flex flex-col justify-center items-center font-sans font-semibold text-wrap text-2xl'>
                        <h1>Welcome</h1>
                        <h1>To</h1>
                        <h1 className='text-center'>{'Demo Hospital Name'}</h1>
                    </div>

                    {/* login form */}
                    <div className='flex flex-col gap-3 text-center text-sm'>
                        <div className='w-80 border-gray-300 border-2 rounded-md'>
                            <input className='px-3 py-2 rounded-md w-full' type='text' placeholder='Enter Username...' />
                        </div>
                        <div className='w-80 flex bg-white rounded-md border-gray-300 border-2'>
                            <input className='px-3 py-2 rounded-lg w-full' type={passVisible ? 'text' : 'password'} placeholder='Enter Password...'/>
                            <button className='px-3' onClick={()=>setPassVisible(!passVisible)}>
                                {passVisible ? <VisibilityOffRoundedIcon /> : <RemoveRedEyeRoundedIcon />}
                            </button>
                        </div>

                        <h1 className='text-blue-700 cursor-pointer'>Forgot Password!</h1>
                        <button className='w-full bg-green-500 p-3 rounded-md font-bold'>Login Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login


// <div className='flex flex-col justify-center items-center font-semibold text-lg'>
// <h1>Welcome</h1>
// <h1>To</h1>
// <h1>Dhamtari Christian Hospital</h1>
// </div>
// <div className='flex flex-col gap-3'>

// <input className='px-3 py-2 rounded-md font-semibold' type='text' placeholder='Enter Username' />
// <div className='bg-white rounded-md'>
//     <input className='px-3 py-2 rounded-md font-semibold w-80'  type={passVisible ? 'text' : 'password'} placeholder='Enter Password' />
//     <button className='px-3'>
//         {passVisible ? <VisibilityOffRoundedIcon /> : <RemoveRedEyeRoundedIcon/>}
//     </button>
// </div>
// <button>Forgot Password!</button>
// </div>