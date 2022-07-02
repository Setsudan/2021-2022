import { useState } from "react";
import { ScrollToNext } from "../components/scrollToNext";
import { supabase } from "./_init";

const loadData = async () => {
  let { data: Projects, error } = await supabase.from("Projects").select("*");
  console.log(Projects);
  console.warn(error);
};
loadData();
export const RenderProject = () => {
  //const [webProjects, setwebProject] = useState([]);
  /* supabase
    .from("Projects")
    .select("*")
    .order("id", { ascending: false })
    .then(({ data, error }) => {
      if (!error) {
        setwebProject(data);
      } else {
        console.log(error);
      }
    })
    .then(() => {
      /let images = document.querySelectorAll(".web-project-card");
      const appearOptions = { threshold: 1 };
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

      images.forEach((image) => {
        appearOnScroll.observe(image);
      }); 
      console.log(webProjects);
    }); */
  return (
    <>
      <div id="webprojectsbg"></div>
      <div id="webProjects">
        <ScrollToNext link="#skills" />
        <div id="webProjectList">
          {webProjects.map((webProject) => {
            return (
              <a
                href={webProject["project_link"]}
                className="web-project-card"
                key={webProject["id"]}
              >
                <img
                  src={apiurl + webProject["project_name"] + ".png"}
                  alt={webProject["project_name"]}
                  className="project-img"
                />
                <span className="date">{webProject["date"]}</span>
                <span className="project-name">
                  {webProject["project_name"]}
                </span>
                <span className="project-skill">
                  Made with : {webProject["project_skill"]}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
