import React, { Fragment, useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/ThemeProvider';

const Project = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const [ bgTheme, setBGTheme ] = useState("");
  const [ textTheme, setTextTheme ] = useState("");


  useEffect(() => {
      const newBGTheme = theme.dark ? "dark" : "light";
      setBGTheme(newBGTheme);

      const newTextTheme = theme.dark ? "light" : "dark";
      setTextTheme(newTextTheme);
  }, [theme]);
  return (
    <Fragment>
          <div className="col-md-4 mt-3">
            <div className={`work-box project smooth-transition bg-${bgTheme} ${theme.dark ? 'dark-mode-project' : ''}`}>
              <a href={project.url}
              target='_blank'
              rel="noopener noreferrer"
              // data-lightbox="gallery-vmarine"
              >
                <div className="work-img">
                  <img src={project.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className={`w-title text-${textTheme} smooth-transition`}>{project.title}</h2>
                      <div className="w-more">
                        <span className="w-ctegory font-weight-bold">
                          {project.stack}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      {/* <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </a>

              <hr />

              <div className="text-center pb-0 mt-0">
                <a href={project.git_repo}
                target='_blank'
                rel="noopener noreferrer"
                >
                  <span className={`text-${textTheme} hover-effect`}>
                  Go to Github Repo
                  </span>

                </a>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Project