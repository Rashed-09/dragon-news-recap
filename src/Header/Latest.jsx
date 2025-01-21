import Marquee from "react-fast-marquee";
const Latest = () => {
  return (
    <div>
      <div className="flex gap-2 w-[60%] mx-auto px-4 my-6 py-2 bg-slate-600 rounded">
        <button className="btn">Latest</button>
        <Marquee>
          <p>
            Programming is the art of creating instructions for computers to
            perform tasks. Code is written in languages like Python, Java, or
            C++. Debugging ensures functionality by fixing errors. Clean code
            enhances readability and efficiency. Coding fosters problem-solving,
            creativity, and innovation, forming the backbone of modern
            technology and digital systems.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Latest;
