import { useEffect } from 'react';
import Logo from '../assets/scissors_logo.svg'
import Line from '../assets/logo_line.svg'
import {IoChevronDown} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase.js';

const Navbar = (user: any) => {
  const navigate = useNavigate();

  const userSignout = () => {
    signOut(auth).then(()=>{
        toast.success('User signed out')
    }).catch(err=>console.log(err))
  }

  useEffect(()=>{
    console.log('User loaded')
  },[user]);

  return (
    <>
      <nav className="flex flex-row items-center justify-between w-[80%] pt-[1rem] mx-auto gap-[8.75rem] text-[1.5rem] text-primary-300-base">
        <div className="flex flex-row p-[0.5rem] items-start justify-start gap-[0.5rem]">
          <img className=" w-[1.5rem] h-[1.5rem]" alt="" src={Logo} />
          <img className=" w-[0.13rem] h-[1.63rem]" alt="" src={Line} />
          <h1 className=" leading-[2rem] flex items-center w-[6.19rem] h-[1.5rem] shrink-0 font-bold">
            SCISSOR
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-[2.5rem] text-[1.13rem] text-text-color-main-text font-gilroy-medium hover:cursor-pointer">
          <p className=" text-primary-300-base">My URLs</p>
          <div className="flex flex-row justify-center items-center gap-[0.2rem] w-[6.25rem] h-[1.5rem]">
            <p className=" top-[0.06rem] left-[0rem]">Features</p>
            <IoChevronDown className=" top-[0rem] left-[4.75rem] w-[1.5rem] h-[1.5rem] cursor-pointer" />
          </div>
          <p>Pricing</p>
          <p>Analytics</p>
          <p>FAQs</p>
        </div>
        {
        
            (<div className="flex flex-row items-center justify-start gap-[1.5rem] text-[1rem] font-gilroy-semibold cursor-pointer">
              <p
                onClick={() => navigate('/userlogin')}
              >Log in</p>
              <button className="rounded-81xl bg-primary-300-base w-[8.88rem] h-[2.75rem] flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] text-neutral-white outline-none hover:opacity-[90%]">
                <p className="leading-[0.75rem]">Try for free</p>
              </button>
            </div>)
            //  (
            //   <div className="flex flex-row items-center justify-start gap-[1.5rem] text-[1rem] font-gilroy-semibold cursor-pointer">
            //     <p className='text-[12px]'>Welcome {user.user.email}</p>
            //     <button className="rounded-81xl bg-primary-300-base w-[auto] h-[2.75rem] flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] text-neutral-white outline-none hover:opacity-[90%]"
            //       onClick={userSignout}>
            //       <p className="leading-[0.75rem]"> Sign Out</p>
            //     </button>
            //   </div>)
        }
      </nav>
    </>
  );
};

export default Navbar