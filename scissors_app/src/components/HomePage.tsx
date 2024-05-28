import Navbar from "./Navbar";
import Links from '../assets/links_image.svg';
import Blob from '../assets/blob_image.svg';
import HeroFooter from '../assets/header_footer_image.svg';
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Trimmer from "./Trimmer";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const HomePage = (user: any) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="heroContainer">
        <Navbar user={user}/>
        <div className="relative bg-neutral-white w-[100%] h-[60rem] text-center text-[3rem]">
          <div className="absolute top-[10.13rem] left-[calc(50%_-_474px)] flex flex-col items-center justify-start gap-[2rem]">
            <div className="flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative w-[59.25rem] h-[12.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_474px)] leading-[6rem] inline-block w-[59.25rem] h-[12.5rem] font-bold">
                  <span> Optimize Your Online Experience with Our Advanced</span>
                  <span className="text-primary-400"> URL Shortening</span>
                  <span> Solution</span>
                </div>
              </div>
              <div className="relative text-[1.13rem] leading-[1.75rem] font-gilroy-medium inline-block w-[48.81rem] h-[6.56rem] shrink-0">
                Personalize your shortened URLs to align with your brand identity.
                Utilize custom slugs, branded links, and domain customization
                options to reinforce your brand presence and enhance user
                engagement.
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[3.5rem] text-left text-[1rem] text-neutral-white font-gilroy-semibold">
              <button className="rounded-81xl outline-none bg-primary-300-base w-[8.88rem] h-[2.75rem] flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] hover:opacity-[90%]">
                <p className="leading-[0.75rem]" onClick={()=>navigate('/userSignup')}>Sign Up</p>
              </button>
              <p className="text-primary-300-base cursor-pointer">Learn more</p>
            </div>
          </div>
          <div className="absolute top-[37.94rem] left-[23.06rem] w-[43.81rem] h-[21.04rem] text-[1rem] font-gilroy-medium">
            <img
              className="absolute top-[0.64rem] left-[4.34rem] w-[15.36rem] h-[16.08rem]"
              alt=""
              src={Blob}
            />
            <div className="absolute top-[1.5rem] left-[calc(50%_-_153.5px)] rounded-3xl bg-gray-200 [backdrop-filter:blur(212px)] flex flex-col py-[2.5rem] px-[3.75rem] items-start justify-center gap-[1rem] border-[0.5px] border-solid border-primary-400">
              <div className="flex items-center justify-center item-center w-[100%]">
                <img
                  alt=""
                  src={Links}
                />
              </div>
              <div className="self-stretch relative leading-[1.5rem]">
                <span>Seamlessly transform your long URLs into{" "}</span>
                <span className="font-gilroy-semibold">concise{" "}</span>
                <span>and{" "}</span>
                <span className="font-gilroy-semibold">shareable links{" "}</span>
                <span> with just few clicks.</span>
              </div>
            </div>
          </div>
        </div>
        <img src={HeroFooter} width={'100%'} />
      </div>
      <Features />
      <Pricing />
      <Trimmer />
      <FAQ />
      <Footer />
      {/* <ToastContainer position='bottom-right'/> */}
    </>
  );
};

export default HomePage;
