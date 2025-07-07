"use client";

import { useState } from "react";

import Image from "next/image";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    return <header className="w-full bg-elements shadow">
        <div className="flex justify-between items-center max-w-desktop h-[70px] m-auto px-5">
            <div className="text-lg font-extrabold">
                Where in the world?
            </div>
            <div
                onClick={() => setDarkMode(!darkMode)}
                className="flex cursor-pointer hover:bg-background p-3 hover:shadow transition-all">
                {
                    !darkMode ? <Image
                        className="dark:invert"
                        src="/moon.svg"
                        alt="Dark mode icon"
                        width={20}
                        height={20}
                        priority
                    /> : <Image
                        className="dark:invert"
                        src="/sun.svg"
                        alt="Light mode icon"
                        width={20}
                        height={20}
                        priority
                    />
                }
                <span className="ml-2 block text-base font-semibold">
                    Dark Mode
                </span>
            </div>
        </div>
    </header >
}