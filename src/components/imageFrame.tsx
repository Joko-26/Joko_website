
import { NineSliceFrame } from "@nine-slice-frame/react";
import type React from "react";

export default function ImageFrame({src="", frameSrc="", className="", img_classname="", borderWidth=15}) {


    return (
        <NineSliceFrame
            imagePath={frameSrc}
            slice={4}
            borderWidth={borderWidth}
            repeat="repeat"
            fill
            pixelated
            className={className}
          >
            <img src={src} alt={src} className={img_classname}/>
          </NineSliceFrame>
    )
}