import { useNavigate } from 'react-router-dom';
import blob from '../assets/blob_2.svg';
import blob2 from '../assets/blob_4.svg';

const Revolution = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-[100%] h-[20rem] overflow-hidden text-center text-neutral-white">
          <div className="absolute top-[calc(50%_-_199.5px)] left-[0rem] [background:linear-gradient(180deg,_#1e3448_99.99%,_rgba(30,_52,_72,_0))] w-[100%] h-[25rem]" />
          <img
            className="absolute h-full w-[40.2%] top-[0%] right-[0%] bottom-[0%] left-[59.8%] max-w-full overflow-hidden max-h-full opacity-[0.7]"
            alt=""
            src={blob}
          />
          <img
            className="absolute h-full w-[46.34%] top-[0%] right-[53.66%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src={blob2}
          />
          <div className="absolute top-[6.81rem] left-[calc(50%_-_403px)] flex flex-col items-center justify-start gap-[2rem]">
            <h1 className="leading-[3rem] inline-block w-[50.38rem] h-[3.56rem] text-[40px] font-extrabold">
              Revolutionizing Link Optimization
            </h1>
            <button className="rounded-81xl bg-primary-400 w-[12.5rem] h-[3rem] overflow-hidden outline-none hover:opacity-[90%] flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] text-left text-[1rem] font-gilroy-semibold">
              <p className="relative leading-[0.75rem]" onClick={()=>navigate('/userSignup')}>Get Started</p>
            </button>
          </div>
        </div>
  )
}

export default Revolution