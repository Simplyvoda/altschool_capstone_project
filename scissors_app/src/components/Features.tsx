import SideLine from '../assets/line_700.svg'
import editIcon from '../assets/custom_url_icon.svg'
import analyticsIcon from '../assets/dataanalytics_icon.svg'
import qrCodeIcon from '../assets/qrcode_icon.svg';
import urlShortenIcon from '../assets/url_shorten_icon.svg';

const Features = () => {
  return (
    <div className="relative bg-neutral-white w-[100%] h-[61.38rem]">
          <div className="absolute top-[0rem] w-[100%]  bg-gray-100 flex flex-row py-[3.75rem] px-[8.75rem] items-center justify-center gap-[7.5rem]">
            <div className="flex flex-row items-start justify-start font-extrabold text-[42px]">
              <div className="relative leading-[48px] inline-block w-[21.06rem]">
                <p>One Stop.</p>
                <p>
                  <span>Four</span>
                  <span className="text-primary-400"> Possibilities</span>
                  <span className="text-text-color-main-text">.</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[4.5rem] text-[2rem] font-gilroy-semibold">
              <div className="flex flex-row py-[0rem] px-[0.25rem] items-start justify-center gap-[4.5rem]">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="font-bold leading-[2.5rem]">3M</div>
                  <div className=" text-[1rem] leading-[1.5rem] font-gilroy-medium">
                    Active users
                  </div>
                </div>
                <div className="h-[6.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="font-bold leading-[2.5rem]">60M</div>
                  <div className=" text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[7.69rem] h-[3.25rem] ">
                    Links & QR codes created
                    </div>
                </div>
              </div>
              <div className="flex flex-row py-[0rem] px-[0.25rem] items-start justify-center gap-[4.5rem]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                      <div className="font-bold leading-[2.5rem]">1B</div>
                      <div className=" text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[8.94rem] h-[3.5rem] ">
                        Clicked & Scanned connections
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="font-bold leading-[2.5rem]">300k</div>
                  <div className="text-[1rem] leading-[1.5rem] font-gilroy-medium">
                    App Integrations
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[21.75rem] left-[7.5rem] flex flex-row items-start justify-start gap-[6rem]">
            <div className="flex flex-col justify-start gap-[1rem]">
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <img
                  className="w-[0.31rem] h-[3rem]"
                  alt=""
                  src={SideLine}
                />
                <p className="leading-[32px] text-[40px] font-bold">
                  <span>Why choose</span> {" "}
                  <span className="text-primary-400">Scissors</span>
                </p>
              </div>
              <div className="text-[1rem] leading-[1.75rem] font-gilroy-medium inline-block w-[23.13rem] h-[12rem] ">{`Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. `}</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4rem] text-[2rem] font-gilroy-semibold">
              <div className="flex flex-row items-start justify-start gap-[1.75rem]">
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                  <img
                    className="w-[3.5rem] h-[3.5rem]"
                    alt=""
                    src={urlShortenIcon}
                  />
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <h1 className="leading-[1.75rem] font-bold">
                      URL Shortening
                    </h1>
                    <p className="text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[21.25rem] h-[5rem] ">
                      Scissor allows you to shorten URLs of your business,
                      events. Shorten your URL at scale, URL redirects.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                    <img
                      className="w-[3.5rem] h-[3.5rem]"
                      alt=""
                      src={editIcon}
                    />
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <h1 className="leading-[1.75rem] font-bold">
                      Custom URLs
                    </h1>
                    <p className="text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[21.25rem] h-[4.44rem] ">
                      With Scissor, you can create custom URLs, with the length
                      you want! A solution for socials and businesses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.75rem]">
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                    <img
                      className="w-[3.5rem] h-[3.5rem]"
                      alt=""
                      src={qrCodeIcon}
                    />
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <h1 className="leading-[1.75rem] font-bold">QR Codes</h1>
                    <p className="text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[21.25rem] h-[5rem] ">
                      Generate QR codes to your business, events. Bring your
                      audience and customers to your doorstep with this scan and
                      go solution.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                    <img
                      className="w-[3.5rem] h-[3.5rem]"
                      alt=""
                      src={analyticsIcon}
                    />
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <h1 className=" leading-[1.75rem] font-bold">
                      Data Analytics
                    </h1>
                    <p className="text-[1rem] leading-[1.5rem] font-gilroy-medium inline-block w-[21.25rem] h-[5rem] ">
                      Receive data on the usage of either your shortened URL,
                      custom URLs or generated QR codes. Embedded to monitor
                      progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Features