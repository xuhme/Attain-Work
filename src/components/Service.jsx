import { service } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Service = () => (
  <section
    id="services"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-40" />

    <div className="w-full flex justify-center items-center text-center flex-col sm:mb-6 mb-0 relative z-[1]">
      <h2 className={styles.heading2}>
        Discover <br className="sm:hidden block" /> Our Service
      </h2>
      <div className="w-full md:mt-0 mt-6"></div>
    </div>

    <div className="flex flex-wrap justify-center items-center w-full service-container relative z-[1]">
      {service.map((card) => (
        <ServiceCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Service;
