/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ScrollToNext } from "../components/scrollToNext";
import { supabase } from "./_init";

export default function Skills() {
  const [skills, setSkill] = useState([]);
  const [learning, setLearning] = useState([]);
  supabase
    .from("Skills")
    .select("*")
    .order("since", { ascending: true })
    .then(({ data, error }) => {
      if (!error) {
        setSkill(data);
      }
    })
    .then(() => {
      let cards = document.querySelectorAll(".skill-card");
      const appearOptions = {
        threshold: 1,
      };
      const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
      ) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);

      cards.forEach((card) => {
        appearOnScroll.observe(card);
      });
    });
  supabase
    .from("Learning")
    .select("*")
    .order("since", { ascending: true })
    .then(({ data, error }) => {
      if (!error) {
        setLearning(data);
      }
    });
  return (
    <div id="skills">
      <ScrollToNext link="#contact" />
      <h2>My skills</h2>
      <div className="skillList">
        {skills.map((skill) => {
          return (
            <span className="skill-card" key={skill["id"]}>
              <span className="skill">{skill["skill"]}</span>
              <span className="intel">Practiced since: {skill["since"]}</span>
            </span>
          );
        })}
      </div>
      <div id="currentlylearning">
        <h2>&& Currently learning: </h2>
        <div className="skillList">
          {learning.map((skill) => {
            return (
              <span className="skill-card" key={skill["id"]}>
                <span className="skill">{skill["skill"]}</span>
                <span className="intel">
                  {skill["planned"]
                    ? `Planning to learn around ${skill["since"]}`
                    : `Learning since: ${skill["since"]}`}
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
