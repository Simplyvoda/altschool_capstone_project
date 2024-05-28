import {MouseEvent, useEffect, useState} from 'react';
import Wand from "../assets/magic_wand.svg";
import blob from '../assets/blob_4.svg';
import blob2 from '../assets/blob_2.svg';
import { shortenUrl } from "../services/apishortenerservice";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Trimmer = () => {
  const [url, setUrl] = useState<string>('');
  const [showUrl, setShowUrl] = useState<boolean>(false);

  const trimmerFunction = (url:string) => {
    // e.preventDefault();
    try {
      shortenUrl(url).then(
        (res) => {
          console.log(res)
          setUrl(res.data.tiny_url)
          setShowUrl(true)
        }
      ).catch((err) => { console.log(err) });
    } catch (err) {
      console.log(err)
    }
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('URL copied successfully')
      })
      .catch((error) => {
        toast.error('Failed to copy URL to clipboard')
        console.error('Failed to copy URL to clipboard:', error);
      });
  };

  useEffect(()=>{
    console.log(url);
  },[url])

  return (
    <div className="relative [background:linear-gradient(180deg,_#1e3448_99.99%,_rgba(30,_52,_72,_0))] w-[100%] h-[32.69rem] overflow-hidden shrink-0 text-[0.88rem] text-primary-100 font-gilroy-medium">
      <img
        className="absolute h-full w-[64.25%] top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.7]"
        alt=""
        src={blob}
      />
      <img
        className="absolute h-full w-[67.96%] top-[0%] right-[0%] bottom-[0%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
        alt=""
        src={blob2}
      />
      <div className="absolute top-[calc(50%_-_178px)] left-[calc(50%_-_238px)] rounded-xl bg-neutral-white shadow-[0px_4px_8px_rgba(100,_162,_255,_0.18)] [backdrop-filter:blur(12px)] overflow-hidden flex flex-col p-[2.63rem] items-center justify-center border-[1px] border-solid border-stroke-glass">
        {
          !showUrl ?
            (<form className="flex flex-col items-start justify-start gap-[1.5rem] w-[26rem]" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Paste URL here..."
                className="rounded-xl outline-none focus:border-2 box-border w-[100%] h-[3.44rem] py-[0.5rem] px-[0.75rem] flex flex-col items-start justify-center text-[0.75rem] border-[1px] border-solid border-primary-100"
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="flex flex-row items-center justify-center gap-[0.75rem] w-full">
                <input
                  placeholder="Customize domain"
                  className="rounded-xl outline-none focus:border-2 overflow-hidden w-[1/2] flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center gap-[0.63rem] border-[1px] border-solid border-primary-100"
                  disabled={true}
                />
                <input
                  placeholder="Type Alias here"
                  className="rounded-xl outline-none focus:border-2 overflow-hidden w-[1/2] flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center gap-[0.63rem] border-[1px] border-solid border-primary-100"
                  disabled={true}
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[100%] gap-[0.75rem] text-neutral-white font-gilroy-semibold">
                <button
                  className="rounded-81xl outline-none bg-primary-400 w-[100%] h-[3rem] overflow-hidden flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] hover:opacity-[90%] cursor-pointer"
                  onClick={() => trimmerFunction(url)}
                >
                  <p className="relative leading-[0.75rem]">Trim URL</p>
                  <img
                    className="relative w-[1.01rem] h-[1.01rem]"
                    alt=""
                    src={Wand}
                  />
                </button>
                <div className="w-[100%] flex flex-row p-[0.63rem] box-border items-center justify-start text-primary-100 font-gilroy-medium">
                  <p className="relative leading-[1.25rem] flex items-center w-[100%]">
                    <span className="[line-break:anywhere] w-full">
                      <span className="text-dodgerblue">{`By clicking TrimURL, I agree to the `}</span>
                      <span className="font-h2-bold">
                        Terms of Service, Privacy Policy
                      </span>
                      <span>
                        <span className="text-dodgerblue">{` `}</span>
                        <span>and Use of Cookies.</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </form>) :
            (<div className="flex flex-col items-start justify-start gap-[1.5rem] w-[26rem]">
              <p>
                Here's your link :
              </p>
              <Link to={url}>{url}</Link>
              <button
                className="rounded-81xl outline-none bg-primary-400 w-[100%] h-[3rem] overflow-hidden flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] hover:opacity-[90%] cursor-pointer text-white"
                onClick={copyUrl}
              >
                <p className="relative leading-[0.75rem]">Copy URL</p>
                <img
                  className="relative w-[1.01rem] h-[1.01rem]"
                  alt=""
                  src={Wand}
                />
              </button>
              <p onClick={()=>setShowUrl(false)} className='cursor-pointer'>Customise another url</p>
            </div>)
        }
      </div>
      <ToastContainer position='top-right'/>
    </div>
  );
};

export default Trimmer;
