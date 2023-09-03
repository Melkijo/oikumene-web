"use client";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const router = useRouter();
   const supabase = createClientComponentClient();
   const handleSignIn = async () => {
      const { data } = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
      });

      if (data.session !== null) {
         router.push("/admin/dashboard");
      } else {
         alert("Email atau password salah");
      }
   };

   return (
      <>
         <div className="flex justify-center flex-col items-center gap-5 my-40 ">
            <h1>Login</h1>

            <form action="">
               <div className="flex flex-col w-72 gap-5">
                  <Input
                     type="email"
                     label="Email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     variant="bordered"
                     className="max-w-xs"
                  />
                  <Input
                     type="password"
                     label="Password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     variant="bordered"
                     className="max-w-xs"
                  />

                  <Button onClick={handleSignIn} color="primary">
                     Login
                  </Button>
               </div>
            </form>
         </div>
      </>
   );
}
