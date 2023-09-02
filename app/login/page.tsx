"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";

export default function Page() {
   return (
      <>
         <div className="flex justify-center flex-col items-center gap-5 my-40 ">
            <h1>Login</h1>

            <form action="">
               <div className="flex flex-col w-72 gap-5">
                  <Input
                     type="email"
                     label="Email"
                     //   labelPlacement="outside"
                     variant="bordered"
                     className="max-w-xs"
                  />
                  <Input
                     type="password"
                     label="Password"
                     //  placeholder="******"
                     variant="bordered"
                     className="max-w-xs"
                  />

                  <Button type="submit" color="primary">
                     Login
                  </Button>
               </div>
            </form>
         </div>
      </>
   );
}
