import {
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
    Figma,
    Cypress,
    Storybook,
    Git,
    Tailwind,
  } from "@/components/icon";

export const Skills = () => {
    return (
    
    <div className="flex flex-wrap lg:flex justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Js/><p>Javascript</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Ts/><p>Typescript</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><React/><p>React</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Next/><p>Next.js</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Node/><p>Node.js</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Express/><p>Express.js</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Nest/><p>Nest.js</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Socket/><p>Socket.io</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Post/><p>PostgateSQL</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Mongo/><p>MongoDB</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Sass/><p>Sass/Scss</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Tailwind/><p>Tailwindcss</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Figma/><p>Figma</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Cypress/><p>Cypress</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Storybook/><p>Storybook</p></div>
        <div className="flex flex-col items-center justify-center gap-2 w-10w-[88px] h-[100px]"><Git/><p>Git</p></div>     
    </div>
    )
}