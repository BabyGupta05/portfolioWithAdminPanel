import React from "react";

export default function Header() {
  return (
    <header className="bg-primary-background text-primary-text px-20 ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Baby Gupta</div>
          <nav className="space-x-4">
            <ul className="flex space-x-10">
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Home
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                About
              </li>
              <li className="hover:underline-offset-8 hover:underline cursor-pointer">
                Skill
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Experience
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Projects
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Github
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Contact
              </li>
              <li className="hover:underline-offset-8  hover:underline cursor-pointer">
                Resume
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
