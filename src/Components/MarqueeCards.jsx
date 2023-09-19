import Marquee from "react-fast-marquee";

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction || "left"}
      gradient={false}
      speed={120}
      pauseOnHover={true}
      
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
