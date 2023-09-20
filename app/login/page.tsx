"use client";
import React, { useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const router = useRouter();
   const supabase = createClientComponentClient();
   const handleSignIn = async () => {
      setLoading(true);
      const { data } = await supabase.auth.signInWithPassword({
         email: email,
         password: password,
      });

      if (data.session !== null) {
         router.push("/admin/dashboard");
         setLoading(false);
      } else {
         alert("Email atau password salah");
         setLoading(false);
      }
   };

   return (
      <>
         <div className="flex justify-center flex-col items-center gap-5  bg-gradient-to-r from-blue-200 to-cyan-200 h-[100vh]">
            <h1 className="text-[25px] md:text-[40px] leading-none  ">Login</h1>

            <form action="">
               <div className="flex flex-col w-72 gap-5">
                  <Input
                     type="email"
                     label="Email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     className="bg-white rounded-xl"
                     variant="bordered"
                     size="md"
                  />
                  <Input
                     type="password"
                     label="Password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     className="bg-white rounded-xl"
                     variant="bordered"
                     size="md"
                  />

                  <Button onClick={handleSignIn} color="primary" size="lg">
                     Login
                     {loading ? (
                        <Spinner color="default" size="sm" className="ps-2" />
                     ) : null}
                  </Button>
               </div>
            </form>
         </div>
      </>
   );
}
