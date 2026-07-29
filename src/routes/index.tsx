import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { TiledSection } from "#/components/tiledSection";
import { NineSliceFrame } from "@nine-slice-frame/react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [age, setAge] = useState("");

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
      <section id="hero" className="flex flex-col">
        <TiledSection
          tileSrc="/wall1.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5"
        >
          <NineSliceFrame
            imagePath="/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-64 w-64"
          >
            <div className="p-5">
              <h1 className="text-xl">Hey there</h1>
              <p>
                My name is Joko26 and im a{" "}
                <span style={{ color: "#baa7d9" }}>{age}yr</span> old gamedev
                and programmer. i mostly use Typescript and React but currently
                im learning Rust.
              </p>
            </div>
          </NineSliceFrame>
          <NineSliceFrame
            imagePath="/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-64 w-64 flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center space-y-5">
              <button
                onClick={() => {
                  scrollToSection("projects");
                }}
              >
                <NineSliceFrame
                  imagePath="/button1.png"
                  slice={12}
                  borderWidth={40}
                  repeat="repeat"
                  fill
                  pixelated
                  className="h-full w-full"
                >
                  <p className="p-4" style={{ color: "#a494be" }}>
                    Projects
                  </p>
                </NineSliceFrame>
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                }}
              >
                <NineSliceFrame
                  imagePath="/button1.png"
                  slice={12}
                  borderWidth={40}
                  repeat="repeat"
                  fill
                  pixelated
                  className="h-full w-full"
                >
                  <p className="p-4" style={{ color: "#a494be" }}>
                    About
                  </p>
                </NineSliceFrame>
              </button>
            </div>
          </NineSliceFrame>
        </TiledSection>
      </section>
      <section id="projects">
        {" "}
        <TiledSection
          tileSrc="/wall2.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5"
        >
          <NineSliceFrame
            imagePath="/box2.png"
            slice={12}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className="h-full w-full"
          ></NineSliceFrame>
          <div>
            {}
          </div>
        </TiledSection>
      </section>
      <section id="about">
        {" "}
        <TiledSection
          tileSrc="/wall1.png"
          scale={3}
          className="h-screen w-full flex items-center justify-center flex-col p-4 space-y-5"
        ></TiledSection>
      </section>
    </div>
  );
}
