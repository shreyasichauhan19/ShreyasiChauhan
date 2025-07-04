import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-400 p-6 noselect"
      >
        <span
          className="opacity-70"
          style={{
            textTransform: "uppercase",
            fontFamily: "JosefinSans",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-4xl sm:text-5xl md:text-7xl"
          style={{ fontFamily: "Morganite Black"}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
