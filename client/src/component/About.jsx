import React from "react";
import { Heading } from "./Heading";
const skills = ["react", "javascript", "node", "typescript", "next.js"];
export default function About() {
  return (
    <div className="bg-secondary-background px-20 w-full items-center">
      <Heading props={{ title: "About Me", subTitle: "My Introduction" }} />
      <div className="flex">
        <div className="h-[70vh] w-1/2">
          <img src="https://placehold.co/300x300" alt="" />
        </div>
        <div className="flex flex-col gap-5 w-3/4">
          <p className="text-primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            inventore reiciendis harum delectus amet saepe sequi sit quam.
            Repellat praesentium omnis minus ipsum eius alias nihil molestias,
            libero aliquid natus! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iusto, incidunt!
          </p>
          <p className="text-primary-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, animi
            omnis quam fugit illum debitis explicabo sed eum, expedita sequi
            quo. Placeat, molestias animi. Quibusdam id aut quisquam accusamus
            debitis ullam nihil a dolorem ipsa, voluptates magni eaque vero
            placeat. Temporibus cumque quaerat provident possimus accusantium
            repudiandae pariatur a qui dolores quasi doloribus veritatis maxime
            consectetur illum, m doloremque dolorem! Placeat nobis sit ea
            possimus accusamus!
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-secondary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          eveniet!
        </h3>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill) => {
            return (
              <div className="border border-borderDivider py-3 px-5 ">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
