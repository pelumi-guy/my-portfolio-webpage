import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeProvider';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [aboutInfo, setAboutInfo] = useState({
    skills: [
      { id: "react", content: "ReactJS", percentage: "90%", value: "80" },
      { id: "next", content: "Next.js", percentage: "80%", value: "90" },
      { id: "express", content: "ExpressJS", percentage: "75%", value: "75" },
      { id: "asp.net", content: "ASP.NET Core", percentage: "80%", value: "80" },
      {
        id: "sql",
        content: "SQL (Microsoft SQL Server, Postgres, MySQL)",
        percentage: "75%",
        value: "75"
      },
      { id: "mongodb", content: "MongoDB", percentage: "65%", value: "65" },
      {
        id: "sass",
        content: "Sass",
        percentage: "75%",
        value: "75"
      },
      {
        id: "flask",
        content: "Python Flask",
        percentage: "60%",
        value: "60"
      },
      {
        id: "cypress",
        content: "Cypress",
        percentage: "85%",
        value: "85"
      },
      {
        id: "bash",
        content: "Bash Scripting",
        percentage: "80%",
        value: "80"
      },
      {
        id: "azure",
        content: "Azure Devops",
        percentage: "60%",
        value: "60"
      }
    ],
    about_me: [
      {
        id: "first-p-about",
        content:
          "Oluwapelumi Olalekan is a skilled software engineer with a background in Mechanical Engineering from the University of Lagos. After excelling as a Maintenance Team Lead in the telecommunications sector, specializing in hybrid diesel and solar power solutions, he transitioned to software engineering to pursue his passion for building impactful digital solutions.",
      },
      {
        id: "second-p-about",
        content:
          "Currently a <span class='font-weight-bold'>Backend Software Engineer at Sterling Bank</span>, he contributes to <span class='font-italic'>Switch by Sterling</span>, a platform providing banking services to Nigerians in the diaspora. He is actively involved in migrating legacy .NET systems to modern .NET 8.0 architectures, optimizing RESTful APIs, and ensuring compliance and maintainability. He also works part-time with <span class='font-weight-bold'>Novodeus</span>, developing full-stack applications using Next.js, and mentors entry-level developers in Cypress."
      },
      {
        id: "third-p-about",
        content:
          "Pelumi&apos;s technical expertise includes ASP.NET, ReactJS, Next.js, TypeScript, Express.js, MongoDB, Python Flask, Microsoft SQL Server, Azure DevOps, and CI/CD pipelines. He thrives on solving complex problems, delivering scalable solutions, and empowering teams to achieve exceptional results.",
      },
      {
        id: "fourth-p-about",
        content:
          "When away from his desk, Pelumi is passionate about fitness and weightlifting, channeling discipline and focus from his gym routine into his professional pursuits.",
      },
    ]
  });

  const [ bgTheme, setBGTheme ] = useState("");
  const [ textTheme, setTextTheme ] = useState("");


  useEffect(() => {
      const newBGTheme = theme.dark ? "dark" : "light";
      setBGTheme(newBGTheme);

      const newTextTheme = theme.dark ? "light" : "dark";
      setTextTheme(newTextTheme);
  }, [theme]);

  return (
    <section id="about" className="about-mf sect-pt4 route">
        <div className={`container bg-${bgTheme} smooth-transition`}>
          <div className="row">
            <div className="col-sm-12">
              <div className={`box-shadow-full bg-${bgTheme} smooth-transition`}>
                <div className={`row bg-${bgTheme} smooth-transition`}>
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {aboutInfo.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span className={`text-${textTheme}`}>{skill.content}</span>{" "}
                            <span className={`text-${textTheme} pull-right`}>
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className={`title-left text-${textTheme}`}>Meet Pelumi!</h5>
                      </div>
                      {aboutInfo.about_me.map(content => {
                        return (
                          <p className={`lead text-${textTheme} clear-text`} key={content.id}
                            dangerouslySetInnerHTML={{ __html: content.content }}>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
