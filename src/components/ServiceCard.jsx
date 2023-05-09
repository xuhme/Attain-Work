const ServiceCard = ({ service, content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 service-card">
    <h1 className="flex font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[54px] leading-[44px] text-gradient uppercase">
      {service} <img src={img} alt={name} className="w-[48px] h-[48px] ml-4" />
    </h1>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default ServiceCard;
