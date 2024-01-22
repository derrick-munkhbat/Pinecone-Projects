
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  Birdy,
  Hug,
  Kitty,
  Location,
  Dot,
  Js,
  Ts,
  React,
  Next,
  Node,
  Express,
  Nest,
  Socket,
  Mongo,
  Sass,
  Figma,
  Cypress,
  Storybook,
  Git,
  Tailwind,
  Action,
  Email,
  Copy,
  Cell,
} from "@/components/icon";
import { Chip } from "@/components/Chip";
// import { list } from "postcss";

export default function Home() {
  return (

<div className="lg:p-20 max-lg:w-96 mx-auto justify-center">
    <div className="p-3">
      <Header />

{/* INTRO */}


      <div className="lg:flex flex-row-reverse">
        <div className="flex justify-center mt-10 lg:w-3/6">
          <img src="/images/profile-portrait.jpg" alt="profile-portrait" />
        </div>

        <div className="mt-5 lg:w-3/4">
          <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
          <p className="text-base mt-2 text-slate-500 text-justify">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        

          <div className="flex items-center mt-10">
            <Location />
            <p className="text-slate-500">Ahmedabad, India</p>
          </div>

          <div className="flex items-center ">
            <Dot />
            <p className="text-slate-500">Available for new projects</p>
          </div>

          <div className=" flex mt-8">
            <Kitty />
            <Birdy />
            <Hug />
          </div>
        </div>
      </div>

{/*ABOUT ME */}
     
        <div className="flex flex-col gap-2 items-center justify-center mt-20">
          <Chip label="About me" />
        </div>

        <div className="lg:flex">
          <div className="flex justify-center mt-10 lg:w-3/6">
            <img src="/images/profile-about-me.jpg" alt="profile-about-me" />
          </div>

          
          <div className="mt-5 lg:w-3/4">
            <h2 className="text-4xl">Curious about me? Here you have it:</h2>
            <p className="text-base mt-2 text-slate-500 text-justify">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-base mt-2 text-slate-500 text-justify">
              I began my journey as a web developer in 2015, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. Now,
              in my early thirties, 7 years after starting my web development
              journey, I'm building cutting-edge web applications using modern
              technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
              Supabase and much more.
            </p>

            <p className="text-base mt-2 text-slate-500 text-justify">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>

            <p className="text-base mt-2 text-slate-500 text-justify">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or you
              can follow me on GitHub.
            </p>

            <p className="text-base mt-2 text-slate-500 text-justify">
              Finally, some quick bits about me.
            </p>

            <ul className="text-base mt-2 text-slate-500 text-justify">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>

            <p className="text-base mt-2 text-slate-500 text-justify">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
        </div>
      </div>

{/* SKILLS */}
      
      <div className="pb-10">
        <div className="flex flex-col items-center mt-10 mb-10">
          <Chip label="Skills" />
        </div>

      
        <p className="text-base mt-2 text-slate-500 text-center">
          The skills, tools and technologies I am really good at:
        </p>

      
        <div className="flex-col mt-10 lg:hidden">
          <div className="flex justify-evenly mb-10"> 
            <Js/>
            <Ts/>
            <React/>
          </div>

          <div className="flex justify-evenly  mb-10"> 
            <Next/>
            <Node />
            <Express/>
          </div>

          <div className="flex justify-evenly  mb-10"> 
            <Nest />
            <Socket />
            <img src="/images/Post.png" alt="Post" />
          </div>

          <div className="flex justify-evenly  mb-10"> 
            <Mongo />
            <Sass />
            <Tailwind/>
          </div>

          <div className="flex justify-evenly  mb-10"> 
            <Figma/>
            <Cypress/>
            <Storybook/>

          </div>

          <div className="ml-14"><Git /></div>
        </div>

        <div className="hidden lg:flex flex-col mt-10">
          <div className="flex justify-evenly mb-10"> 
            <Js/>
            <Ts/>
            <React/>
            <Next/>
            <Node />
            <Express/>
            <Nest />
            <Socket />
            
          </div>

          <div className="flex justify-evenly  mb-10"> 
            <img src="/images/Post.png" alt="Post" />
            <Mongo />
            <Sass />
            <Tailwind/>
            <Figma/>
            <Cypress/>
            <Storybook/>
            <Git />
          </div>
        </div>


      </div>

{/* EXPERIENCE */}

      <div className="flex flex-col items-center bg-slate-100 pt-1 pb-1">
        <div className="flex flex-col items-center mt-10 mb-10">
          <Chip label="Experience" />
        </div>
        <p className="text-base mt-2 text-slate-500 text-center">
          Here is a quick summary of my most recent experiences:
        </p>

        <div className="flex flex-col border-black rounded-xl w-80 bg-white">
       
          <h1>upwork</h1>
          <p>Nov 2021 - Present</p>
        
       
          <h1>Sr. Frontend Developer</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        

        <div className="flex flex-col border-black rounded-xl w-80 bg-white mt-10 mb-10 ">
          <h1>upwork</h1>
          <p>Jul 2017 - Oct 2021</p>
        
       
          <h1>Team Lead</h1>
          <ul>
            <li>Sed quis justo ac magna.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>

        <div className="flex flex-col border-black rounded-xl w-80 bg-white mt-10 mb-10 ">
          <h1>upwork</h1>
          <p>Dec 2015 - May 2017</p>
        
       
          <h1>Full Stack Developer</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>

{/* WORK */}

      
        <div className="flex flex-col items-center mt-10 mb-10">
          <Chip label="Work" />
        </div>
        <p className="flex text-slate-500 text-center mb-10">
        Some of the noteworthy projects I have built:
        </p>

        <div className="flex flex-col items-center gap-5">
        <div className="">
          <img src="/images/work.jpg" alt="work" />
        </div>
        <div>
          <h1>Fiskil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <Chip label="React" />
            <Chip label="Next.js" />
            <Chip label="Typescript" />
            <Chip label="Nest.js" />
            <Chip label="PostgreSQL" />
          </div>
          <div className="flex flex-col">
            <Chip label="Tailwindcss" />
            <Chip label="Figma" />
            <Chip label="Cypress" />
            <Chip label="Storybook" />
            <Chip label="Git" />
          </div>
          
          
        </div>
          <Action />
      </div>




{/* GET IN TOUCH */}
      <div className="flex flex-col items-center">
        <Chip label="Get in touch" />
        <p className="text-center">
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>

        <div className="flex">
          <Email/>
          <h3>reachsagarshah@gmail.com</h3>
          <Copy/>
        </div>

        <div className="flex">
          <Cell/>
          <h3>+91 8980500565</h3>
          <Copy/>
        </div>
        

        <p>You may also find me on these platforms!</p>
        <div className="flex">
          <Kitty />
          <Birdy />
          <Hug />
        </div>
          



      </div>






      <Footer />
    </div>
</div>
  );
}
