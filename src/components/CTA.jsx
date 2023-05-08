import styles from "../style";

const CTA = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col justify-center items-center text-center">
      <h2 className={styles.heading2}>Let’s try our service!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We would be delighted if you could give our service a try and see how we
        can help you.
      </p>
    </div>
  </section>
);

export default CTA;
