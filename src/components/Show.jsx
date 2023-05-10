import { show } from "../constants";
import styles from "../style";

const Show = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 sm:pt-[2%] `}
  >
    {show.map((show) => (
      <div
        key={show.id}
        className={`flex-1 flex justify-center items-center flex-row m-3 sm:ml-0 ml-10 text-center`}
      >
        <h4 className="justify-center items-center font-poppins font-semibold xs:text-[24px] text-[18px] xs:leading-[54px] leading-[44px] text-gradient uppercase ml-3">
          {show.title}
        </h4>
      </div>
    ))}
  </section>
);

export default Show;
