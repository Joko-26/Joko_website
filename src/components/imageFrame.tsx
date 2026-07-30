
import { NineSliceFrame } from "@nine-slice-frame/react";
import type React from "react";

export default function ImageFrame({src="", frameSrc="", width= 64, height=64}) {


    return (
        <NineSliceFrame
            imagePath={frameSrc}
            slice={4}
            borderWidth={40}
            repeat="repeat"
            fill
            pixelated
            className={`h-${height} w-${width}`}
          >
            <img src={src} alt={src} className={`h-${height} w-${width} p-10`}/>
          </NineSliceFrame>
    )
}