// import React from 'react'
import checkCircle from '../assets/check-circle.svg'
import SideLine from '../assets/line_700.svg'

const Pricing = () => {
  return (
    <>
      <div className="relative bg-neutral-white w-[100%] h-[67.06rem] text-center text-[1.5rem] font-gilroy-medium">
        <div className="w-[fit-content] mx-auto top-[2.63rem] left-[calc(50%_-_288px)] flex flex-row items-start justify-start gap-[1rem] text-[2.5rem] font-h2-bold">
          <img
            className="w-[0.31rem] h-[3rem]"
            alt=""
            src={SideLine}
          />
          <div className="flex flex-col items-center justify-start gap-[0.5rem]">
            <h1 className="leading-[3rem] font-bold">
              <span>A</span>{" "}
              <span className="text-primary-400">price perfect</span>
              <span> for your needs.</span>
            </h1>
            <p className="relative text-[16px] leading-[24px] font-gilroy-medium inline-block w-[34.75rem] h-[3.25rem] ">
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </p>
          </div>
        </div>
        <div className="absolute top-[13.63rem] left-[11rem] w-[68rem] h-[39.19rem]">
          <div className="absolute top-[5.38rem] left-[0rem] rounded-xl bg-neutral-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] box-border w-[23.69rem] h-[28.44rem] overflow-hidden border-[0.4px] border-solid border-primary-400">
            <h1 className="absolute top-[1.5rem] left-[5.44rem] leading-[2rem]">
              Basic
            </h1>
            <div className="absolute top-[5.63rem] left-[5.44rem] flex flex-col items-start justify-start gap-[1rem] text-[2.5rem] font-h2-bold">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <h1 className="leading-[3rem]">Free</h1>
                <h2 className="text-[1.25rem] leading-[2rem] font-gilroy-medium">
                  Free plan for all users
                </h2>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.5rem] text-[0.88rem] text-black font-gilroy-medium">
                <div className="flex flex-row items-center justify-center gap-[0.5rem] text-text-color-main-text">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Unlimited URL Shortening
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.5rem] text-text-color-main-text">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Basic Link Analytics
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Customizable Short Links
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Standard Support
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">Ad-supported</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[5.38rem] left-[44.31rem] rounded-xl bg-neutral-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] box-border w-[23.69rem] h-[28.44rem] overflow-hidden border-[0.4px] border-solid border-primary-400">
            <h1 className="absolute top-[1.63rem] left-[5rem] leading-[2rem]">
              Teams
            </h1>
            <div className="absolute top-[5.75rem] left-[5.38rem] flex flex-col items-start justify-start gap-[1rem] text-[2.5rem] font-h2-bold">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <h1 className="leading-[3rem]">$25/month</h1>
                <h2 className="text-[1.25rem] leading-[2rem] font-gilroy-medium">
                  Share with up to 10 users
                </h2>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.5rem] text-[0.88rem] font-gilroy-medium">
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Team Collaboration
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    User Roles and Permissions
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Enhanced Security
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">API Access</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Dedicated Account Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0rem] left-[calc(50%_-_205px)] rounded-xl [background:linear-gradient(180deg,_#1e3448_99.99%,_rgba(30,_52,_72,_0))] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.05)] w-[25.63rem] h-[39.19rem] overflow-hidden text-neutral-white">
            <h1 className="absolute top-[5.94rem] left-[4.06rem] leading-[2rem]">
              Professional
            </h1>
            <div className="absolute top-[9.44rem] left-[4.06rem] flex flex-col items-start justify-start gap-[1.5rem] text-[2.5rem] font-h2-bold">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <h1 className="leading-[3rem]">$15/month</h1>
                <h2 className="text-[1.25rem] leading-[2rem] font-gilroy-medium">
                  Ideal for business creators
                </h2>
              </div>
              <div className="w-[auto] flex flex-col items-start justify-start gap-[1.5rem] text-[0.88rem] font-gilroy-medium">
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Enhanced Link Analytics
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Custom Branded Domains
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">Advanced Link Customization</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className=" w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Priority Support
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                  <img
                    className="w-[1rem] h-[1rem] overflow-hidden "
                    alt=""
                    src={checkCircle}
                  />
                  <p className="leading-[1.5rem]">
                    Ad-free Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[57.06rem] left-[calc(50%_-_206px)] flex flex-row items-start justify-start gap-[0.75rem] text-left text-[1rem] text-primary-300-base font-gilroy-semibold">
          <button className="rounded-81xl box-border w-[12.5rem] h-[3rem] overflow-hidden  flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center gap-[0.63rem] border-[1px] border-solid border-primary-300-base cursor-pointer">
            <div className="relative leading-[0.75rem]">Get Custom Pricing</div>
          </button>
          <button className="rounded-81xl bg-primary-300-base w-[12.5rem] h-[3rem] overflow-hidden  flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center gap-[0.63rem] text-neutral-white cursor-pointer hover:opacity-[90%]">
            <div className="relative leading-[0.75rem]">Select Pricing</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing