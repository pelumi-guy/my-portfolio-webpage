import React, { Fragment } from 'react'

const Project = ({ project }) => {
  return (
    <Fragment>
          <div className="col-md-4">
            <div className="work-box">
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
                      <h2 className="w-title">{project.title}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
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

              <div className="text-center pb-3 mt-0">
                <a href={project.git_repo}
                target='_blank'
                rel="noopener noreferrer"
                >
                  Go to Github Repo
                </a>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default Project