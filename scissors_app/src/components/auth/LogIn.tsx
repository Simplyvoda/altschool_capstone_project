import { useEffect, useState } from 'react'
import { auth } from '../../../src/firebase';
import AuthDetails from './AuthDetails';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BsGoogle} from 'react-icons/bs'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // console.log('User credential', userCredential)
          toast.success(`Welcome ${userCredential.user.email}`);
        })
        .catch((error) => {
          console.log(error.message);
          toast.error('Oops! Something went wrong');
        });
    } catch (error) {
      console.log(error);
    }finally{
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };


  return (
    <>
      <div className='login-container container w-100% h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-y-4 w-100%'>
        <p className='text-center text-[#6C6D71]'>Log in with:</p>
        <button className='flex flex-row items-center bg-[#2A5BD7] w-[fit-content] px-6 py-2 gap-2 rounded-[3px] text-[16px] text-white'><span><BsGoogle color='white'/></span> Google</button>
        <p className='text-[#828387] text-[16px] self-center py-4 border-l w-100%'
        id='orTag'>
          OR
        </p>
      </div>
      <form onSubmit={handleSignIn} 
      className='flex flex-col gap-y-4 w-[462px]'>
        <input
          type="email"
          placeholder='enter email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-[#2A5BD7] py-2 px-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-[#2A5BD7]'
        />
        <input
          type="password"
          placeholder='enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 border-[#2A5BD7] py-2 px-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-[#2A5BD7]'
        />
        <button type="submit" className='bg-[#2A5BD7] text-white w-full rounded-[20px] py-2'>
          Log in
        </button>
      </form>
      <div className='flex flex-col justify-center items-center w-[462px] gap-2 mt-4'>
        <p className='text-[#6C6D71] text-[15px]'>Don't have an account ? <Link to='/usersignUp' className='text-[#005AE2]'>Sign Up</Link></p>
        <p className='text-[14px] text-[#6C6D71]'>
          By
          signing in with
          an account, you agree to
          Scissor's <span className='text-[13px]'>Terms of Service, Privacy Policy</span> and <span className='text-[13px]'>Acceptable Use Policy.</span>
          </p>
      </div>
      <Link to='/' className='mt-2 text-[#2A5BD7]'>Go back to Homepage</Link>
      <ToastContainer position="bottom-right"/>
      </div>
    </>
  )
}

export default LogIn