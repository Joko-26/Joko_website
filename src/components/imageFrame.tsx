
import { NineSliceFrame } from "@nine-slice-frame/react";
import type React from "react";

export default function ImageFrame({src="", frameSrc="", className="", img_classname=""}) {


    return (
        <NineSliceFrame
            imagePath={frameSrc}
            slice={4}
            borderWidth={15}
            repeat="repeat"
            fill
            pixelated
            className={className}
          >
            <img src={src} alt={src} className={img_classname}/>
          </NineSliceFrame>
    )
}