import twitter from '../assets/twitter_logo.svg';
import facebook from '../assets/facebook_logo.svg';
import instagram from '../assets/instagram_logo.svg';
import linkedin from '../assets/linkedin_logo.svg';
import blackLogo from '../assets/black_logo.svg';
import blackLine from '../assets/black_logo_line.svg';
import blob from '../assets/blob_2.svg';
import blob2 from '../assets/blob_3.svg';

const Footer = () => {
  return (
    <div className="relative bg-neutral-white w-[100%] h-[35.06rem] overflow-hidden  text-[1rem] text-neutral-900">
      <div className="absolute top-[5.94rem] left-[calc(50%_-_294px)] flex flex-row items-start justify-start gap-[1.5rem]">
        <div className="flex flex-col items-start justify-start gap-[3.5rem]">
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="relative leading-[1.5rem] text-[16px] font-bold">
              Why Scissor ?
            </h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Scissor 101</p>
              <p className="m-0">{`Integrations & API`}</p>
              <p className="m-0">Pricing</p>
            </div>
          </div>
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="relative leading-[1.5rem] text-[16px] font-bold">
              Resources
            </h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Blog</p>
              <p className="m-0">Resource Library</p>
              <p className="m-0">Developers</p>
              <p className="m-0">App Connectors</p>
              <p className="m-0">Support</p>
              <p className="m-0">Trust Center</p>
              <p className="m-0">Browser Extension</p>
              <p className="m-0">Mobile App</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.94rem]">
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="leading-[1.5rem] text-[16px] font-bold">
              Solutions
            </h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Social Media</p>
              <p className="m-0">Digital Marketing</p>
              <p className="m-0">Customer Service</p>
              <p className="m-0">For Developers</p>
            </div>
          </div>
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="leading-[1.5rem] text-[16px] font-bold">Features</h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Branded Links</p>
              <p className="m-0">Mobile Links</p>
              <p className="m-0">Campaign</p>
              <p className="m-0">{`Management &`}</p>
              <p className="m-0">Analytics</p>
              <p className="m-0">QR Code generation</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[3.5rem]">
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="relative leading-[1.5rem] text-[16px] font-bold">
              Products
            </h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Link Management</p>
              <p className="m-0">QR Codes</p>
              <p className="m-0">Link-in-bio</p>
            </div>
          </div>
          <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
            <h1 className="leading-[1.5rem] text-[16px] font-bold">Legal</h1>
            <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
              <p className="m-0">Privacy Policy</p>
              <p className="m-0">Cookie Policy</p>
              <p className="m-0">Terms of Service</p>
              <p className="m-0">Acceptable Use Policy</p>
              <p className="m-0">Code of Conduct</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-[0rem] px-[1.5rem] items-start justify-start gap-[0.5rem]">
          <h1 className="leading-[1.5rem] flex items-center w-[5.88rem] h-[1.25rem] text-[16px] font-bold">
            Company
          </h1>
          <div className="flex flex-col items-start justify-start text-neutral-800 font-gilroy-medium">
            <p className="m-0">About Scissor</p>
            <p className="m-0">Careers</p>
            <p className="m-0">Partners</p>
            <p className="m-0">Press</p>
            <p className="m-0">Contact</p>
            <p className="m-0">Reviews</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[5.94rem] left-[12.69rem] flex flex-col items-start justify-start gap-[2rem] text-[1.5rem] text-text-color-main-text">
        <div className="flex flex-row p-[0.5rem] items-start justify-start gap-[0.5rem]">
          <img className="w-[1.5rem] h-[1.5rem]" alt="" src={blackLogo} />
          <img className="w-[0.13rem] h-[1.63rem]" alt="" src={blackLine} />
          <p className="leading-[2rem] flex items-center w-[6.19rem] h-[1.5rem] ">
            SCISSOR
          </p>
        </div>
        <div className="flex flex-row py-[0rem] px-[0.5rem] items-start justify-start gap-[1.5rem]">
          <img className="w-[1.5rem] h-[1.5rem]" alt="" src={twitter} />
          <img className="w-[1.5rem] h-[1.5rem]" alt="" src={instagram} />
          <img className="w-[1.5rem] h-[1.5rem]" alt="" src={linkedin} />
          <img className="w-[1.5rem] h-[1.5rem]" alt="" src={facebook} />
        </div>
      </div>
      <img
        className="absolute h-[63.81%] w-[37.71%] top-[36.19%] right-[0%] bottom-[0%] left-[62.29%] max-w-full overflow-hidden max-h-full opacity-[0.7]"
        alt=""
        src={blob}
      />
      <img
        className="absolute h-[96.43%] w-[35.24%] top-[3.57%] right-[64.76%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.8]"
        alt=""
        src={blob2}
      />
      <div className="absolute top-[31.38rem] left-[63.56rem] flex flex-row py-[0rem] px-[0.75rem] items-center justify-center gap-[0.5rem] text-[0.88rem] text-neutral-800 font-gilroy-medium">
        <p className="leading-[1.25rem]">Term of Service</p>
        <p className="leading-[1.25rem]">Security</p>
        <p className="leading-[1.25rem]">ⓒ Scissor 2023</p>
      </div>
    </div>
  );
};

export default Footer;