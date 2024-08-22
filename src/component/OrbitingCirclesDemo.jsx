import OrbitingCircles from "./OrbitingCircles";
import { FaArrowRight } from "react-icons/fa6";
import { FaNodeJs, FaHtml5, FaReact, FaCss3Alt, FaAndroid, FaAws, FaEthereum } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex items-center justify-center flex-col ">
        <span className="text-2xl font-semibold text-center lg:text-5xl lg:font-bold mb-8">
          We've really spend up our workflow
        </span>
        <span className="text-gray-400  font-semibold pt-2 text-center">
        <b>We’ve just released</b> a new update!Check out the all new dashboard view. Pages and now load faster.
       
        </span>
        <span className="text-gray-400 font-semibold text-center">
        Join 4,000+ companies already growing
        </span>
        <div className="flex-col lg:flex-row flex gap-4 pt-8 w-full p-5 lg:w-1/2">
  <button className="text-black border-spacing-2 w-full lg:w-5/6 border rounded-lg p-2 mb-1 lg:mb-1 font-bold flex justify-center items-center gap-3" style={{ height: '3rem' }}>
    <FaArrowRight /> Start learning today
  </button>
  <button className="text-white bg-[#7f56d9] rounded-lg p-2 lg:w-1/2 w-full mb-1 font-semibold" style={{ height: '2.8rem' }}>
    Join Now
  </button>
</div>

      </div>

      {/* Inner Circle Path */}
      <div className="absolute h-[200px] w-[200px] rounded-full border-2 border-dotted border-gray-400"></div>
      
      {/* Orbiting Icons */}
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={100}
      >
        <FaNodeJs color="#339933" className="z-[-2]"  size={50} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={100}
      >
        <FaHtml5 color="#E34F26" size={60} />
      </OrbitingCircles>

      {/* Outer Circle Path */}
      <div className="absolute h-[380px] w-[380px] rounded-full border-2 border-dotted border-gray-400"></div>
      
      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[80px] w-[80px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <FaReact color="#61DAFB" size={80} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[80px] w-[80px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <FaCss3Alt color="#1572B6" size={80} />
      </OrbitingCircles>

      {/* Middle Circle Path */}
      <div className="absolute h-[540px] w-[540px] rounded-full border-2 border-dotted border-gray-400"></div>
      
      {/* More Circles */}
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={270}
      >
        <SiFlutter color="#02569B" size={60} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={270}
      >
        <FaAndroid color="#3DDC84" size={60} />
      </OrbitingCircles>

      {/* Large Circle Path */}
      <div className="absolute h-[740px] w-[740px] rounded-full border-2 border-dotted border-gray-400"></div>
      
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={370}
      >
        <FaAws color="#FF9900" size={60} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={370}
      >
        <FaEthereum color="#3C3C3D" size={60} />
      </OrbitingCircles>

      {/* Even Larger Circle Path */}
      <div className="absolute h-[920px] w-[920px] rounded-full border-2 border-dotted border-gray-400"></div>
      
      {/* Additional Circles */}
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={460}
      >
        <FaNodeJs color="#339933" size={60} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={460}
      >
        <FaHtml5 color="#E34F26" size={60} />
      </OrbitingCircles>

      {/* <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={600}
      >
        <FaReact color="#61DAFB" size={60} />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={600}
      >
        <FaCss3Alt color="#1572B6" size={60} />
      </OrbitingCircles> */}
    </div>
  );
}
