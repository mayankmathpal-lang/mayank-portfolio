import { CTA } from "../components";
import { skills } from "../constants";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Mayank Mathpal
        </span>{" "}
        👋
      </h1>

      {/* Intro and Code snippet layout */}
      <div className='mt-8 flex flex-col lg:flex-row gap-10 items-stretch justify-between'>
        <div className='flex-1 flex flex-col justify-between gap-4 text-slate-600'>
          <div className='space-y-4'>
            <p>
              I'm a motivated Java developer at the start of my engineering journey. 
              My foundation is in Spring Boot — building REST APIs, handling dependency 
              injection, and structuring clean backend architectures.
            </p>
            <p>
              Beyond the backend, I can bring ideas to life in the browser with HTML &amp; CSS, 
              and I've been diving deep into Spring AI to build intelligent, LLM-powered 
              applications that feel like the future.
            </p>
            <p>
              I'm a fast learner, love reading documentation, and believe that good 
              software is built with intention, not just syntax.
            </p>
          </div>

          <div className='mt-8 flex flex-wrap gap-8 justify-between border-t border-slate-200 pt-6'>
            <div className='flex flex-col'>
              <span className='font-semibold text-blue-600 text-3xl font-poppins'>3+</span>
              <span className='text-xs text-slate-400 tracking-wider uppercase font-poppins'>Projects Built</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold text-blue-600 text-3xl font-poppins'>7+</span>
              <span className='text-xs text-slate-400 tracking-wider uppercase font-poppins'>Technologies</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold text-blue-600 text-3xl font-poppins'>100%</span>
              <span className='text-xs text-slate-400 tracking-wider uppercase font-poppins'>Committed</span>
            </div>
          </div>
        </div>

        {/* Code Editor Window */}
        <div className='flex-1 w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-5 font-mono text-xs sm:text-sm shadow-xl flex flex-col justify-between text-slate-400'>
          <div>
            <div className='flex gap-1.5 mb-4 border-b border-slate-850 pb-3 items-center'>
              <span className='w-3 h-3 rounded-full bg-red-500' />
              <span className='w-3 h-3 rounded-full bg-yellow-500' />
              <span className='w-3 h-3 rounded-full bg-green-500' />
              <span className='text-xs text-slate-500 ml-3 select-none font-mono'>MayankController.java</span>
            </div>
            <pre className='overflow-x-auto whitespace-pre leading-relaxed py-2'>
              <code>
                <span className='text-pink-500'>@RestController</span>{"\n"}
                <span className='text-blue-400'>public class</span> <span className='text-white'>MayankController</span> {"{"}{"\n"}
                {"  "}<span className='text-pink-500'>@Autowired</span>{"\n"}
                {"  "}<span className='text-blue-400'>private</span> <span className='text-white'>SkillService</span> skills;{"\n\n"}
                {"  "}<span className='text-pink-500'>@GetMapping</span>(<span className='text-emerald-400'>"/about"</span>){"\n"}
                {"  "}<span className='text-blue-400'>public</span> <span className='text-white'>Developer</span> getMe() {"{"}{"\n"}
                {"    "}<span className='text-blue-400'>return new</span> <span className='text-white'>Developer</span>(){"\n"}
                {"      "}.name(<span className='text-emerald-400'>"Mayank Mathpal"</span>){"\n"}
                {"      "}.role(<span className='text-emerald-400'>"Spring Boot Dev"</span>){"\n"}
                {"      "}.skills(skills.getAll()){"\n"}
                {"      "}.available(<span className='text-blue-400'>true</span>);{"\n"}
                {"  "}{"}"}{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className='py-16 flex flex-col'>
        <h3 className='subhead-text'>My Tech Stack</h3>
        <p className='text-slate-500 mt-2 leading-relaxed'>
          A summary of the languages, frameworks, databases, and utilities that I work with:
        </p>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill) => (
            <div className='border border-slate-200 rounded-xl p-5 flex gap-4 hover:shadow-md transition-all duration-300 bg-white' key={skill.name}>
              <div className='block-container w-12 h-12 shrink-0'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center bg-slate-50'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-2/3 h-2/3 object-contain'
                  />
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <div>
                  <h4 className='font-semibold text-base text-black font-poppins leading-none'>{skill.name}</h4>
                  <span className='inline-block text-[10px] text-blue-600 bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5 font-medium tracking-wide uppercase mt-2 font-poppins'>
                    {skill.type}
                  </span>
                </div>
                <p className='text-xs text-slate-500 mt-2.5 leading-relaxed font-sans'>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
