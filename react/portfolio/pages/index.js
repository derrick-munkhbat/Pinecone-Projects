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
  Mongo,
  Figma,
  Git,
  Tailwind,
  Action,
  Email,
  Copy,
  Cell,
  Upwork,
  Post,
} from "@/components/icon";
import { Chip } from "@/components/Chip";
// import { list } from "postcss";

export default function Home() {
  return (
    <div className="pt-20 lg:p-20 max-lg:w-96 mx-auto justify-center dark:bg-black dark:text-white">
      <div className="p-1">
        <Header />

        {/* INTRO */}

        <div className="lg:flex flex-row-reverse mt-10 gap-20">
          <div className="flex p-10">
            <div className="relative bg-slate-300 w-80 h-96 top-10 left-10">
              background
            </div>
            <img
              className="absolute shadow-2xl w-90 h-96 border-white border-8"
              src="/images/headshot.jpg"
              alt="profile-portrait"
            />
          </div>

          <div className="lg:w-3/4 p-5">
            <h2 className="text-3xl mt-10">Hi, I’m Derrick Munkhbat 👋</h2>
            <p className="text-base mt-2 text-slate-500 text-justify">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive.
            </p>

            <div className="flex items-center mt-10">
              <Location />
              <p className="text-slate-500">Ulaanbaatar, Mongolia</p>
            </div>

            <div className="flex items-center ">
              <Dot />
              <p className="text-slate-500">Available for new projects</p>
            </div>

            <div className=" flex mt-8">
              <button>
                <Kitty />
              </button>
              <button>
                <Birdy />
              </button>
              <button>
                <Hug />
              </button>
            </div>
          </div>
        </div>

        {/*ABOUT ME */}
        <div>
          <div className="flex flex-col gap-2 items-center justify-center p-5 mb-5 mt-5">
            <Chip label="About me" />
          </div>

          <div className="lg:flex gap-5">
            <div className="flex justify-center lg:w-1/3 h-full">
              <img
                className="rounded-2xl shadow-2xl"
                src="/images/IMG_0133.jpeg"
                alt="profile-about-me"
              />
            </div>

            <div className="flex flex-col p-5 lg:w-2/3">
              <h2 className="text-3xl text-center mb-5">
                Curious about me? Here you have it:
              </h2>
              <p className="text-base text-slate-500 text-justify">
                Responsible and humble junior level full stack web developer
                with a solid foundation in front-end and back-end development
                technologies, including HTML, CSS, JavaScript, React,
                Tailwindcss, Next.js, Node.js, Express.js, SQL and GitHub.
                Committed to continuous learning and professional growth. Eager
                to contribute to innovative projects, leverage emerging
                technologies, and drive impactful results in the ever-evolving
                field of not only web development but also in the broader realm
                of technology and digital innovation.
              </p>

              <ul className="text-base mt-2 text-slate-500 text-justify">
                <li>
                  The Leap - 6 months full stack program by "Pinecone Academy"
                </li>
                <li>B.S. in Computer Programming</li>
                <li>Full time freelancer</li>
              </ul>

              <p className="text-base text-slate-500 text-justify">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS */}

        <div className="p-5">
          <div className="flex flex-col items-center justify-center p-5">
            <Chip label="Skills" />
          </div>
          <p className="text-base p-5 text-slate-500 text-center">
            The skills, tools and technologies I am really good at:
          </p>

          <div className="flex-col mt-10 lg:hidden">
            <div className="flex justify-evenly mb-10">
              <Js />
              <Ts />
              <React />
            </div>

            <div className="flex justify-evenly  mb-10">
              <Next />
              <Node />
              <Express />
            </div>

            <div className="flex justify-evenly  mb-10">
              <Nest />
              <Socket />
              <img src="/images/Post.png" alt="Post" />
            </div>

            <div className="flex justify-evenly  mb-10">
              <Mongo />
              <Sass />
              <Tailwind />
            </div>

            <div className="flex justify-evenly  mb-10">
              <Figma />
              <Cypress />
              <Storybook />
            </div>

            <div className="ml-14">
              <Git />
            </div>
          </div>

          <div className="hidden lg:flex flex-col mt-10">
            <div className="flex justify-evenly mb-10">
              <Js />
              <Ts />
              <React />
              <Next />
              <Node />
              <Express />
              <Nest />
              <Socket />
            </div>

            <div className="flex justify-evenly  mb-10">
              <img src="/images/Post.png" alt="Post" />
              <Mongo />
              <Sass />
              <Tailwind />
              <Figma />
              <Cypress />
              <Storybook />
              <Git />
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}

        <div className="flex flex-col rounded-2xl items-center bg-slate-100 p-5 dark:bg-slate-300">
          <div className="flex flex-col items-center p-5">
            <Chip label="Experience" />
          </div>
          <p className="text-base text-slate-500 text-center p-5">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col border-black rounded-xl w-80 bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Pinecone Academy
              </h3>
              <p>Nov 2023 - May 2024 </p>

              <h1 className="text-xl decoration-4">Full stack web developer</h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>currently enrolled</li>
              </ul>
            </div>
            <div className="flex flex-col border-black rounded-xl w-80 bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">Remax Hub</h3>
              <p>Jan 2021 - Dec 2023 </p>

              <h1 className="text-xl decoration-4">Realtor</h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Offering advice for clients to buy, sell, or rent their
                  residential and commercial spaces.
                </li>
              </ul>
            </div>

            <div className="flex flex-col border-black rounded-xl w-80 bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Beijing Wok Restaurant
              </h3>
              <p>Sep 2012 - Sep 2019 </p>

              <h1 className="text-xl decoration-4">General Manager</h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Managing and operating a small family restaurant business in
                  North Chicago.
                </li>
              </ul>
            </div>

            <div className="flex flex-col border-black rounded-xl w-80 bg-white p-5 gap-5">
              <h3 className="text-green-600 font-bold text-2xl">
                Comcast Xfinity LLC
              </h3>
              <p>Aug 2009 - Sep 2011 </p>

              <h1 className="text-xl decoration-4">
                Internet Network and Security Technician
              </h1>
              <ul className="flex flex-col text-justify gap-2">
                <li>
                  Installing and troubleshooting internet network and security
                  system for residential and commercial spaces in Chicago area.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* WORK */}

        {/* <div className="p-5">
          <div className="flex flex-col items-center p-5">
            <Chip label="Work" />
          </div>
          <p className="text-base text-slate-500 text-center p-5">
            Some of the noteworthy projects I have built:
          </p>

          <div className="flex flex-col items-start gap-2 p-5">
            <div className="flex items-center p-5">
              <img src="/images/work.jpg" alt="work" />
            </div>
            <div>
              <h1 className="p-5 text-3xl">Fiskil</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
            </div>
            <div className="flex p-5">
              <div className="flex-wrap flex gap-4 self-stretch">
                <Chip label="React" />
                <Chip label="Next.js" />
                <Chip label="Typescript" />
                <Chip label="Nest.js" />
                <Chip label="PostgreSQL" />
                <Chip label="Tailwindcss" />
                <Chip label="Figma" />
                <Chip label="Cypress" />
                <Chip label="Storybook" />
                <Chip label="Git" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-5">
            <div className="flex items-center p-5">
              <img src="/images/work.jpg" alt="work" />
            </div>
            <div>
              <h1 className="p-5 text-3xl">Fiskil</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
            </div>
            <div className="flex p-5">
              <div className="flex-wrap flex gap-4 self-stretch">
                <Chip label="React" />
                <Chip label="Next.js" />
                <Chip label="Typescript" />
                <Chip label="Nest.js" />
                <Chip label="PostgreSQL" />
                <Chip label="Tailwindcss" />
                <Chip label="Figma" />
                <Chip label="Cypress" />
                <Chip label="Storybook" />
                <Chip label="Git" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 p-5">
            <div className="flex items-center p-5">
              <img src="/images/work.jpg" alt="work" />
            </div>
            <div>
              <h1 className="p-5 text-3xl">Fiskil</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
            </div>
            <div className="flex p-5">
              <div className="flex-wrap flex gap-4 self-stretch">
                <Chip label="React" />
                <Chip label="Next.js" />
                <Chip label="Typescript" />
                <Chip label="Nest.js" />
                <Chip label="PostgreSQL" />
                <Chip label="Tailwindcss" />
                <Chip label="Figma" />
                <Chip label="Cypress" />
                <Chip label="Storybook" />
                <Chip label="Git" />
              </div>
            </div>

            <div className="ml-5">
              <Action />
            </div>
          </div>
        </div> */}

        {/* PHOTO */}

        <div className="flex p-5 justify-center items-center">
          <Chip label="Hobby" />
        </div>

        <div className="lg:flex gap-5">
          <div className="flex flex-col p-5 lg:w-1/2">
            <h2 className="text-4xl text-center mb-5">Genghis Khaan Statue</h2>
            <p className="text-base text-slate-500 text-justify">
              The Genghis Khan Equestrian Statue, part of the Genghis Khan
              Statue Complex which I took this image with my drone DJI MAVIC
              drone, is actually a 40-metre (130 ft) tall, stainless steel
              statue of Genghis Khan on horseback and the world's tallest
              equestrian statue.[2] It is located on the bank of the Tuul River
              at Tsonjin Boldog, 54 km (33.55 mi) east of the Mongolian capital
              Ulaanbaatar, where, according to legend, he found a golden whip.
              The statue is symbolically pointed east towards his birthplace. It
              is on top of the Genghis Khan Statue Complex, a visitor centre,
              itself 10 metres (33 ft) tall, with 36 columns representing the 36
              khans from Genghis to Ligdan Khan. It was designed by sculptor D.
              Erdenebileg and architect J. Enkhjargal and erected in 2008.[3]
            </p>
          </div>
          <div className="flex justify-center p-5 lg:w-1/2 h-full">
            <img
              className="rounded-2xl shadow-2xl"
              src="/images/DJI_0379 copy.jpg"
              alt="profile-about-me"
            />
          </div>
        </div>

        {/* GET IN TOUCH */}

        <div className="flex flex-col items-center p-5 gap-5">
          <div className="p-5">
            <Chip label="Get in touch" />
          </div>

          <p className="text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>

          <div className="flex items-center gap-5">
            <Email />
            <h3>derrick.munkhbat@gmail.com</h3>
            <button>
              <Copy />
            </button>
          </div>

          <div className="flex items-center gap-5">
            <Cell />
            <h3>+976 88181074</h3>
            <button>
              <Copy />
            </button>
          </div>

          <p>You may also find me on these platforms!</p>
          <div className="flex gap-5">
            <button>
              <Kitty />
            </button>
            <button>
              <Birdy />
            </button>
            <button>
              <Hug />
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
