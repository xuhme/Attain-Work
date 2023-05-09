import { enhance } from "../assets";
import styles, { layout } from "../style";

const Product = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={enhance}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Enhance with
        <br className="sm:block hidden" />
        Quality products.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Attain Work Co Ltd. offers trusted network devices brands to maximize
        your networking performance.
      </p>
    </div>
  </section>
);

export default Product;
