import React from "react";
import Link from "next/link";

export default function Footer(){
    return(<>
    <div>
        <footer className="bg-[#6f4e37]  p-4 shadow-md mt-8">
            <p className="text-center text-gray-600 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Cafe Shop. All rights reserved.
            </p>
        </footer>
    </div>
    </>);
}