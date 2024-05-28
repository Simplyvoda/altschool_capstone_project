import { useState } from 'react';
// import { HiPlus, HiMinus } from 'react-icons/hi2'
import Revolution from './Revolution';
import logoLine from '../assets/line_700.svg'
import blob from '../assets/blob_5.svg';
import blob2 from '../assets/blob_2.svg';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
// eslint-disable-next-line react/prop-types
const Icon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="relative bg-neutral-white w-[100%] h-[72.06rem] overflow-hidden ">
        <div className="absolute top-[2.69rem] left-[calc(50%_-_396px)] flex flex-col items-center justify-start gap-[4rem]">
          <div className="flex flex-row items-center justify-start gap-[1rem]">
            <img className="w-[0.31rem] h-[3rem]" alt="" src={logoLine} />
            <h1 className="leading-[2rem] text-[40px] font-bold">FAQs</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1.4rem] text-[1.25rem] font-gilroy-medium w-[49.5rem] flex flex-col items-start justify-start gap-[1rem]">
          {
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className='border-b-2 border-[#D6D6D6]'>
                <Accordion open={open === 1+index} icon={<Icon id={1+index} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1+index)} style={{ paddingBottom: '1.4rem', marginTop:'0rem' }}>
                  How does URL shortening work?
                  </AccordionHeader>
                  <AccordionBody className="relative text-[1rem] leading-[2rem] inline-block w-[49.5rem] h-[3.94rem]" style={{ paddingBottom: '1rem' }}>
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                  </AccordionBody>
                </Accordion>
              </div>
            ))
          }
          </div>
        </div>
        <img
          className="absolute h-[74.55%] w-[24.27%] top-[0%] right-[75.73%] bottom-[25.45%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
          alt=""
          src={blob}
        />
        <img
          className="absolute h-[38.07%] w-[25.97%] top-[61.93%] right-[0%] bottom-[0%] left-[80%] max-w-full overflow-hidden max-h-full opacity-[0.7]"
          alt=""
          src={blob2}
        />
      </div>
      <Revolution />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ