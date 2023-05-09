import { show } from "../constants";
import styles from "../style";

const Show = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {show.map((show) => (
      <div
        key={show.id}
        className={`flex-1 flex justify-start items-center flex-row m-3 sm:ml-0 ml-10 `}
      >
        <h4 className="font-poppins font-semibold xs:text-[24px] text-[16px] xs:leading-[54px] leading-[44px] text-gradient uppercase ml-3">
          {show.title}
        </h4>
      </div>
    ))}
  </section>
);

export default Show;
