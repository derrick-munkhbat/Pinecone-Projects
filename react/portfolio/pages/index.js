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
  Post,
  Mongo,
  Sass,
  Tailwind,
  Figma,
  Cypress,
  Storybook,
  Git,
} from "@/components/icon";
import { Chip } from "@/components/Chip";
// import { list } from "postcss";

export default function Home() {
  return (
    <div className="p-3">
      <Header />

      {/* INTRO */}
      <div>
        <div className="border-2 justify-center flex mt-10">
          <img src="/images/profile-portrait.jpg" alt="profile-portrait" />
        </div>

        <div className="mt-5">
          <h2 className="text-4xl">Hi, I’m Sagar 👋</h2>
          <p className="text-base mt-2 text-slate-500 text-justify">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>

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

      {/*ABOUT ME */}
      <div>
        <div className="flex flex-col gap-2 items-center justify-center mt-20">
          <Chip label="About me" />
        </div>

        <div className="border-2 justify-center flex mt-10">
          <img src="/images/profile-about-me.jpg" alt="profile-about-me" />
        </div>

        <div className="mt-5">
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
      <div>
        <div className="flex flex-col gap-2 items-center justify-center mt-20">
          <Chip label="Skills" />
        </div>
        <p className="text-base mt-2 text-slate-500 text-center">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="flex">
          <Ts />
          <Js />
          <React />
          <Git />
          <Storybook />
          <Cypress />
          <Figma />
          <Sass />
          <Mongo />
          <Socket />
          <Nest />
          <Express />
          <Node />

          {/*<Next/>*/}

          {/* <Post/> */}

          {/* <Tailwind/> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
