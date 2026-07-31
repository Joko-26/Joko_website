import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TiledSection } from "#/components/tiledSection";
import { NineSliceFrame } from "@nine-slice-frame/react";
import {} from "#/components/tiledSection";
import ImageFrame from "#/components/imageFrame";

import projectsData from "#/json/projects.json";
import { getRandomInt } from "#/utils";
import ContactForm from "#/components/contactForm";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [age, setAge] = useState("");
  const projects = Object.entries(projectsData?.projects);

  const scrollToSection = (sectionIn: string) => {
    const section = document.getElementById(sectionIn);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  function getAge() {
    const date = new Date();
    const percentage = 1;
    const days = (date.getMonth() - 1) * 30 + date.getDate();
    return `${date.getFullYear() - 2010}.${String(days / 365 / percentage).slice(2)}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <section id="hero" className="flex flex-col text-violet-3">
        <TiledSection
          tileSrc="/violet/wall1.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5"
        >
          <NineSliceFrame
            imagePath="/violet/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-fit"
          >
            <div className="p-5">
              <h1 className="text-xl">Hey there</h1>
              <p>
                My name is Joko26 and im a{" "}
                <span className="text-violet-1">{age}yr</span> old gamedev and
                programmer. i mostly use Typescript and React but currently im
                learning Rust.
              </p>
            </div>
          </NineSliceFrame>
          <NineSliceFrame
            imagePath="/violet/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-fit flex items-center justify-center flex-col p-6 gap-3"
          >
            <h1 className="text-4xl text-violet-1">Overview</h1>
            <div className="flex flex-col items-center justify-center space-y-5">
              <button
                onClick={() => {
                  scrollToSection("projects");
                }}
              >
                <NineSliceFrame
                  imagePath="/violet/button1.png"
                  slice={12}
                  borderWidth={40}
                  repeat="repeat"
                  fill
                  pixelated
                  className="h-full w-full"
                >
                  <p className="p-4 text-violet-2">Projects</p>
                </NineSliceFrame>
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                }}
              >
                <NineSliceFrame
                  imagePath="/violet/button1.png"
                  slice={12}
                  borderWidth={40}
                  repeat="repeat"
                  fill
                  pixelated
                  className="h-full w-full"
                >
                  <p className="p-4 text-violet-2">About</p>
                </NineSliceFrame>
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                }}
              >
                <NineSliceFrame
                  imagePath="/violet/button1.png"
                  slice={12}
                  borderWidth={40}
                  repeat="repeat"
                  fill
                  pixelated
                  className="h-full w-full"
                >
                  <p className="p-4 text-violet-2">Contact me</p>
                </NineSliceFrame>
              </button>
            </div>
          </NineSliceFrame>
        </TiledSection>
      </section>
      <section id="projects" className="text-green-3">
        {" "}
        <TiledSection
          tileSrc="/green/wall2.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5"
        >
          <NineSliceFrame
            imagePath="/green/box1.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-full flex items-center justify-center p-1"
          >
            <h1 className="text-6xl text-green-1">Projects</h1>
          </NineSliceFrame>

          <NineSliceFrame
            imagePath="/green/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-full overflow-y-scroll sm:overflow-y-hidden lg:overflow-y-hidden"
          >
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start p-5 gap-5 ">
              {projects.map((project, id) => {
                const frameNumber = getRandomInt(1, 3);

                return (
                  <NineSliceFrame
                    imagePath="/green/box1.png"
                    slice={12}
                    borderWidth={40}
                    repeat="repeat"
                    fill
                    pixelated
                    className="flex flex-col items-center justify-center p-4 space-y-20 h-full"
                    key={id}
                  >
                    <div className="flex items-center justify-center flex-col ">
                      <ImageFrame
                        src={project?.[1].img}
                        frameSrc={`/green/frame${frameNumber}.png`}
                      ></ImageFrame>
                      <div className="flex-grow">
                        <h1 className="text-3xl" style={{ color: "#5ab390" }}>
                          {project?.[1].name}
                        </h1>
                        <p className="text-xl">{project?.[1].desc}</p>
                      </div>
                      <div className="flex flex-row items-center justify-center space-x-5">
                        {Object.entries(project[1]?.links).map((link, id) => {
                          return (
                            <a key={id} className="" href={link?.[1]}>
                              <NineSliceFrame
                                imagePath="/green/button1.png"
                                slice={5}
                                borderWidth={15}
                                repeat="repeat"
                                fill
                                pixelated
                              >
                                <p className="p-4">{link?.[0]}</p>
                              </NineSliceFrame>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </NineSliceFrame>
                );
              })}
            </div>
          </NineSliceFrame>
        </TiledSection>
      </section>
      <section id="about">
        <TiledSection
          tileSrc="/blue/wall1.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5 text-blue-3"
        >
          <NineSliceFrame
            imagePath="/blue/box1.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-full flex items-center justify-center p-1"
          >
            <h1 className="text-6xl text-blue-1">About</h1>
          </NineSliceFrame>
          <NineSliceFrame
            imagePath="/blue/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-full flex items-center justify-center p-1"
          >
            <div></div>
          </NineSliceFrame>
        </TiledSection>
      </section>
      <section id="contact">
        <TiledSection
          tileSrc="/red/wall2.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5 text-red-3"
        >
          {" "}
          <NineSliceFrame
            imagePath="/red/box1.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-fit w-full flex items-center justify-center p-1"
          >
            <h1 className="text-6xl text-red-1">Contact me</h1>
          </NineSliceFrame>
          <div className="flex flex-row w-full h-full p-3 gap-4">
            <NineSliceFrame
              imagePath="/red/box2.png"
              slice={12}
              borderWidth={40}
              repeat="repeat"
              fill
              pixelated
              className="h-ful w-full flex items-center justify-center p-1"
            ></NineSliceFrame>
            <NineSliceFrame
              imagePath="/red/box2.png"
              slice={12}
              borderWidth={40}
              repeat="repeat"
              fill
              pixelated
              className="h-fit w-full flex flex-col items-center justify-center p-7"
            >
              {" "}
              <h1 className="text-4xl text-red-1">Send me a message</h1>
              <ContactForm
                url="https://discord.com/api/webhooks/1532811136775360833/ptFd6zQCLuHfSw2Dc9vwS_rJJReXmyRrLRKb8WxE4PkMfvHrj2SDPTeZMNNLkEJOnYb_"
                color="red"
              />
            </NineSliceFrame>
          </div>
        </TiledSection>
      </section>
    </div>
  );
}
