import { service } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Service = () => (
  <section
    id="services"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Discover <br className="sm:block hidden" /> Our Service
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Unlock the full potential of your networking capabilities with Attain
          Work Co Ltd's exceptional service and solutions.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center items-center w-full service-container relative z-[1]">
      {service.map((card) => (
        <ServiceCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Service;
