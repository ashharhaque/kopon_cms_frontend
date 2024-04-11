"use client"
import { useState } from "react";
import Image from "next/image";
import UploadFile from "@/ui/UploadFile";
function UploadImage({className}) {
 
  return (
   <>
   <div className={`${className} bg-blue-300 flex  justify-center p-3`}>
    <div className="bg-green-400 flex justify-between">
    <Image
        src="/images/restaurantImageBus.jpeg"
        width={120}
        height={120}
    />
    </div>
    <div className="flex flex-col justify-center mx-3">
    <UploadFile/>
    <div className="text-black text-center py-2">Select Image For Logo</div>
    </div>
    
   </div>
   </>
  );
}

export default UploadImage;
