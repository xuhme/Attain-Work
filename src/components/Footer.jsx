import styles from "../style";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-center items-center text-center">
        <img
          src={logo}
          alt="ATW"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className="font-poppins font-normal text-dimWhite md:text-[16px] text-[12px] mt-4 max-w-full">
          Attain Work Co Ltd.
        </p>
        <p className="font-poppins font-normal text-dimWhite md:text-[16px] text-[12px] max-w-full">
          69 Soi Kosumruamjai 9, Don Muang, Bangkok, 10210
        </p>
        <p className="font-poppins font-normal text-dimWhite md:text-[16px] text-[12px] max-w-full">
          +668-1425-5888 | attain.work@gmail.com
        </p>
      </div>
    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center md:text-[18px] text-[12px] leading-[27px] text-white">
        Copyright Ⓒ 2021 Attain Work. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
