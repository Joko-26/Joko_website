
import { NineSliceFrame } from "@nine-slice-frame/react";
import type React from "react";

export default function ImageFrame({src="", frameSrc="", width= 64, height=64, fill=false}) {


    return (
        <NineSliceFrame
            imagePath={frameSrc}
            slice={4}
            borderWidth={15}
            repeat="repeat"
            fill
            pixelated
            className={fill ? `h-${height} w-${width}` : "h-fill w-fill"}
          >
            <img src={src} alt={src} className={fill ? `h-${height} w-${width} p-10` : "h-fill w-fill p-10"}/>
          </NineSliceFrame>
    )
}