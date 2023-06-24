import React from "react";
import myImage from "../../assets/images/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "react", content: "ReactJS", porcentage: "80%", value: "80" },
        { id: "express", content: "ExpressJS", porcentage: "75%", value: "75" },
        {
          id: "sass",
          content: "Sass",
          porcentage: "70%",
          value: "70"
        },
        { id: "mongodb", content: "MongoDB", porcentage: "75%", value: "75" },
        {
          id: "flask",
          content: "Python Flask",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "mysql",
          content: "MySQL",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "bash",
          content: "Bash Scripting",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "aws",
          content: "AWS",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm a Mechanical Engineering graduate from the University of Lagos with a solid foundation in problem-solving and analytical thinking. After completing my studies, I embarked on a rewarding journey in the Telecommunications industry, where I excelled as a Mechanical Engineering Field Maintenance Team Lead. This experience helped me to develop strong leadership skills and a meticulous approach to consistently delivering high-quality results."
        },
        {
          id: "second-p-about",
          content:
            "Motivated by my unwavering passion for bringing ideas to life and witnessing projects flourish, I made a career pivot in 2021 and immersed myself fully in the field of Software Engineering. Over the past two years, I have diligently honed my coding skills and significantly expanded my knowledge across a wide range of programming languages and software engineering technologies. I have also successfully completed an IBM Cybersecurity Analyst course and obtained my Associate Degree in Software Engineering through the rigorous one-year ALX-Holberton program, solidifying my expertise in the field."
        },
        {
          id: "third-p-about",
          content:
            "As a web developer, I am proficient in a range of web development technologies and frameworks such as HTML5, CSS3, JavaScript, Sass, React JS, Bootstrap, Express JS, MongoDB, Python Flask and MySQL. Leveraging these tools, I have created diverse and innovative products. Throughout my career journey, I have cultivated a keen eye for detail, fostered a collaborative mindset, and maintained an unwavering commitment to delivering exceptional results."
        },
        {
          id: "fourth-p-about",
          content:
            "When I'm not writing code or learning about new technologies, you would probably find me in the gym, pumping iron. I believe in maintaining a healthy body and sound mind to stay focused and energized."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
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
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
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
                        <h5 className="title-left">Meet Pelumi!</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead text-dark clear-text" key={content.id}>
                            {content.content}
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
    );
  }
}

export default About;
