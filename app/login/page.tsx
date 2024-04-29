"use client";
import Image from "next/image";
import Link from "next/link";
import { auth, provider } from "@/firebase"; // Import auth and provider from your firebase.js file
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {

  const router = useRouter();
  const signIn = () => {
    signInWithPopup(auth, provider).then((result: any): void => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      console.log(result.user);
      console.log(credential.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", credential?.accessToken);
      router.push("/");
    });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) router.push("/");

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="relative flex items-center bg-gradient-to-br from-sky-50 h-[91vh] to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <h1 className="text-2xl text-cyan-900 font-bold">
                    Sign in / Register
                  </h1>
                  <h2 className="mb-8 text-lg">
                    Let&apos;s explore our best gallery, save your special
                    moment
                  </h2>
                  <form action="">
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button type="submit"></button>
                  </form>
                </div>
                <div className="mt-8 grid space-y-4">
                  <button
                    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    onClick={signIn}
                  >
                    <div className="relative flex items-center space-x-4 justify-center">
                      <Image
                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                        className="absolute left-0 w-5"
                        width={20}
                        height={20}
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

