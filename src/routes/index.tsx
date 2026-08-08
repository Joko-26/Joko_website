import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TiledSection } from "#/components/tiledSection";
import { NineSliceFrame } from "@nine-slice-frame/react";

import {} from "#/components/tiledSection";
import ImageFrame from "#/components/imageFrame";
import { getRandomInt } from "#/utils";
import ContactForm from "#/components/contactForm";
import { useScreenSize } from "#/components/useScreenSize";

import projectsData from "#/json/projects.json";
import contactsData from "#/json/contacts.json";
import aboutData from "#/json/about.json";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [age, setAge] = useState("");

  const screenSize = useScreenSize();

  const projects = projectsData?.projects;
  const contacts = contactsData?.contacts;

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
          className="h-fit w-full min-h-screen flex items-center justify-center flex-col p-4 space-y-5"
        >
          <div className="max-box flex items-center justify-center flex-col space-y-7">
            {String(screenSize) === "xs" || String(screenSize) === "sm" ? (
              <img src="/violet/name.gif" alt="" />
            ) : (
              <img src="/violet/name-big.gif" alt="" />
            )}

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
                <h1 className="text-5xl">Hey there</h1>
                <p className="text-xl">
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
          </div>
        </TiledSection>
      </section>
      <section id="projects" className="text-green-3">
        {" "}
        <TiledSection
          tileSrc="/green/wall2.png"
          scale={3}
          className="h-fit min-h-screen w-full flex items-center flex-col p-4 space-y-5"
        >
          <div className="max-box w-full flex items-center justify-center flex-col">
            <NineSliceFrame
              imagePath="/green/box1.png"
              slice={12}
              borderWidth={40}
              repeat="repeat"
              fill
              pixelated
              className="h-fit w-full flex items-center justify-center p-1 mb-4"
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
              className="h-fit w-full overflow-y-scroll scrollbar-green-3"
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
                          src={project.img}
                          frameSrc={`/green/frame${frameNumber}.png`}
                          className="w-50 h-50"
                          img_classname="w-50 h-50 p-5"
                        ></ImageFrame>
                        <div className="flex-grow">
                          <h1 className="text-3xl" style={{ color: "#5ab390" }}>
                            {project?.name}
                          </h1>
                          <p className="text-xl">{project?.desc}</p>
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-5">
                          {Object.entries(project?.links).map((link, id) => {
                            return (
                              <a key={id} className="" href={link[0]}>
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
          </div>
        </TiledSection>
      </section>
      <section id="about">
        <TiledSection
          tileSrc="/blue/wall1.png"
          scale={3}
          className="h-fit w-full min-h-screen flex items-center justify-center flex-col p-4 space-y-5 text-blue-3 "
        >
          <div className="max-box w-full flex items-center justify-center flex-col">
            <NineSliceFrame
              imagePath="/blue/box1.png"
              slice={12}
              borderWidth={40}
              repeat="repeat"
              fill
              pixelated
              className="h-fit w-full flex items-center justify-center p-3 mb-3"
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
              className="h-fit w-full flex items-center justify-center p-1 overflow-y-scroll scrollbar-blue-3"
            >
              <div className="flex flex-col items-center justify-center m-3 w-full">
                <div className="flex flex-col w-full m-2 p-5">
                  <NineSliceFrame
                    imagePath="/blue/box1.png"
                    slice={12}
                    borderWidth={40}
                    repeat="repeat"
                    fill
                    pixelated
                    className="h-fit w-full flex items-center justify-center p-5 w-full h-fit"
                  >
                    <h1 className="text-2xl text-blue-1 md:text-4xl">
                      Hey as said before on the landing page, my name is Joko26
                      and im a 16yr old programmer from Germany. <br /> I really
                      enjoy making pixelart, playing games, making games and of
                      course programming.
                    </h1>
                  </NineSliceFrame>
                </div>
                <div className="flex flex-col w-full md:flex-row md:space-x-5 justify-between p-3">
                  <div className="flex flex-col flex-1">
                    <NineSliceFrame
                      imagePath="/blue/box2.png"
                      slice={12}
                      borderWidth={40}
                      repeat="repeat"
                      fill
                      pixelated
                      className="h-fit w-full flex-1 flex-col items-center p-5 mb-3"
                    >
                      <h1 className="text-4xl text-blue-1 mb-3">
                        My favourite Games
                      </h1>
                      <div>
                        {aboutData?.games.map((game, id) => {
                          const frameNumber = getRandomInt(1, 3);

                          return (
                            <NineSliceFrame
                              key={id}
                              imagePath="/blue/box1.png"
                              slice={12}
                              borderWidth={40}
                              repeat="repeat"
                              fill
                              pixelated
                              className="flex items-center flex-row p-4 w-full h-fit justify-between"
                            >
                              <div className="max-w-40 max-h-40 ">
                                <ImageFrame
                                  src={game?.img}
                                  frameSrc={`/blue/frame${frameNumber}.png`}
                                  className="w-20 h-20"
                                  img_classname="w-20 h-20 p-2"
                                  borderWidth={10}
                                />
                              </div>
                              <a href={game?.link}>
                                {" "}
                                <h1 className=" text-blue-2 text-lg md:text-2xl lg:text-2xl">
                                  {game?.name}
                                </h1>
                              </a>
                              <h1 className="text-xl overflow-wrap">
                                {aboutData?.rating[String(game?.rating)]}
                              </h1>
                            </NineSliceFrame>
                          );
                        })}
                      </div>
                    </NineSliceFrame>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <NineSliceFrame
                      imagePath="/blue/box2.png"
                      slice={12}
                      borderWidth={40}
                      repeat="repeat"
                      fill
                      pixelated
                      className="h-fit min-h-fit w-full flex-1 flex-col items-center justify-center p-5 mb-3"
                    >
                      <h1 className="text-4xl text-blue-1 mb-3">
                        My favourite tools
                      </h1>
                      <div className="">
                        {aboutData?.tools.map((tool, id) => {
                          const frameNumber = getRandomInt(1, 3);

                          return (
                            <div
                              onClick={() => {
                                window.location.href = tool?.link;
                              }}
                              className="cursor-pointer"
                            >
                              <NineSliceFrame
                                key={id}
                                imagePath="/blue/box1.png"
                                slice={12}
                                borderWidth={40}
                                repeat="repeat"
                                fill
                                pixelated
                                className="flex items-center flex-row p-4 w-full h-fit space-x-15"
                              >
                                <div className="max-w-40 max-h-40 ">
                                  <ImageFrame
                                    src={tool?.img}
                                    frameSrc={`/blue/frame${frameNumber}.png`}
                                    className="w-20 h-20"
                                    img_classname="w-20 h-20 p-2"
                                    borderWidth={10}
                                  />
                                </div>
                                <a href={tool?.link}>
                                  {" "}
                                  <h1 className=" text-blue-2 text-lg md:text-2xl lg:text-2xl hover:underline">
                                    {tool?.name}
                                  </h1>
                                </a>
                              </NineSliceFrame>
                            </div>
                          );
                        })}
                      </div>
                    </NineSliceFrame>
                  </div>
                </div>
                <div className="flex flex-col p-5">
                  <NineSliceFrame
                    imagePath="/blue/box1.png"
                    slice={12}
                    borderWidth={40}
                    repeat="repeat"
                    fill
                    pixelated
                    className="h-fit w-full flex flex-col items-center justify-center p-5"
                  >
                    <h1 className="text-4xl text-blue-1 mb-3">
                      My favourite Songs
                    </h1>
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 overflow-x-scroll scrollbar-blue-2">
                      {aboutData?.songs.map((song, id) => {
                        return (
                          <iframe
                            data-testid="embed-iframe"
                            src={song}
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            key={id}
                          ></iframe>
                        );
                      })}
                    </div>
                  </NineSliceFrame>
                </div>
              </div>
            </NineSliceFrame>
          </div>
        </TiledSection>
      </section>
      <section id="contact">
        <TiledSection
          tileSrc="/red/wall2.png"
          scale={3}
          className="h-fit w-full min-h-screen flex items-center flex-col p-4 space-y-5 text-red-3"
        >
          <div className="max-box w-full flex items-center justify-center flex-col">
            {" "}
            <NineSliceFrame
              imagePath="/red/box1.png"
              slice={12}
              borderWidth={40}
              repeat="repeat"
              fill
              pixelated
              className="h-fit w-full flex items-center justify-center p-5"
            >
              <h1 className="text-6xl text-red-1">Contact me</h1>
            </NineSliceFrame>
            <div className="flex flex-col w-full h-full p-3 gap-4 lg:flex-row">
              <NineSliceFrame
                imagePath="/red/box2.png"
                slice={12}
                borderWidth={40}
                repeat="repeat"
                fill
                pixelated
                className="h-fit w-full flex items-center justify-center p-1"
              >
                <div className="flex flex-col items-center justify-center gap-3 p-5 w-full h-fit">
                  {contacts.map((contact, id) => {
                    const frameNumber = getRandomInt(1, 3);

                    return (
                      <NineSliceFrame
                        key={id}
                        imagePath="/red/box1.png"
                        slice={12}
                        borderWidth={40}
                        repeat="repeat"
                        fill
                        pixelated
                        className="flex  items-center flex-row p-4 w-full h-fit justify-between"
                      >
                        <div className="max-w-40 max-h-40 ">
                          <ImageFrame
                            src={contact?.icon}
                            frameSrc={`/red/frame${frameNumber}.png`}
                            className="w-20 h-20"
                            img_classname="w-20 h-20 p-5"
                            borderWidth={10}
                          />
                        </div>
                        <h1 className=" text-red-2 text-lg md:text-2xl lg:text-3xl">
                          {contact?.name}
                        </h1>
                        <a className="" href={contact?.link}>
                          <NineSliceFrame
                            imagePath="/red/button1.png"
                            slice={5}
                            borderWidth={15}
                            repeat="repeat"
                            fill
                            pixelated
                            className="ml-3"
                          >
                            <p className="p-4 text-red-1">{contact?.text}</p>
                          </NineSliceFrame>
                        </a>
                      </NineSliceFrame>
                    );
                  })}
                </div>
              </NineSliceFrame>
              <NineSliceFrame
                imagePath="/red/box2.png"
                slice={12}
                borderWidth={40}
                repeat="repeat"
                fill
                pixelated
                className="h-fit w-full flex flex-col items-center justify-center p-7 mb-7"
              >
                {" "}
                <h1 className="text-4xl text-red-1">Send me a message</h1>
                <ContactForm
                  url="https://discord.com/api/webhooks/1532811136775360833/ptFd6zQCLuHfSw2Dc9vwS_rJJReXmyRrLRKb8WxE4PkMfvHrj2SDPTeZMNNLkEJOnYb_"
                  color="red"
                />
                <h1>Im really excited for your messages (/≧▽≦)/</h1>
              </NineSliceFrame>
            </div>
          </div>
        </TiledSection>
      </section>
    </div>
  );
}
