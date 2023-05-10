import { show } from "../constants";
import styles from "../style";

const Show = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 sm:pt-[2%] `}
  >
    {show.map((show) => (
      <div
        key={show.id}
        className={`flex-1 flex justify-center items-center flex-row xs:px-0 px-7 py-2 text-center`}
      >
        <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[54px] leading-[44px] text-gradient uppercase ml-3">
          {show.title}
        </h4>
      </div>
    ))}
  </section>
);

export default Show;
