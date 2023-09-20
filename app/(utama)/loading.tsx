"use client";
import Image from "next/image";
import footer2 from "@/assets/footer2.png";
import React from "react";

import { Card, Skeleton } from "@nextui-org/react";
export default function Loading() {
   // You can add any UI inside Loading, including a Skeleton.
   return (
      <>
         <div className="w-screen h-screen flex items-center justify-center">
            <Image
               className="object-cover"
               src={footer2}
               alt=""
               width={100}
               height={100}
            />
         </div>
      </>
   );
}

export function CardLoading() {
   return (
      <Card className="w-[200px] space-y-5 p-4" radius="lg">
         <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
         </Skeleton>
         <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
               <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
               <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
               <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
         </div>
      </Card>
   );
}
