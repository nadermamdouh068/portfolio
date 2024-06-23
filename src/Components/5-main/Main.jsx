import React, { useState } from 'react'
import './Main.css'
import { Card, Button } from 'react-bootstrap'
import ItemDet from './ItemDet'
import { projects } from './Projects'

const Main = () => {

  const [show, setShow] = useState(false);
  const [project, setProject] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    setProject(item);
  }

  

  return (
    <section className="d-flex justify-content-center align-items-center flex-column" id="Projects">
      <h2 className='section-title text-center mb-5'>
        PRO
        <span>JECTS</span>
      </h2>
      <div className="main">
        {projects.length > 0 && projects.map((item) => {
          return (
            <article className="main-card" key={item.id} onClick={() => handleShow(item)}>
              <img src={item.img} alt="" width={300} height={200} />
              <div className="card-box" style={{ width: '300px' }}>
                <h1 className="title">
                  {item.title}
                </h1>
                <p className="desc">
                  {item.desc}
                </p>
                <div className="link-icon d-flex">
                  <div className="d-flex gap-3 ">
                    <div className="icon-link" >
                      <a href={item.proLinK} />
                    </div>
                    <div className="icon-github" >
                      <a href={item.githubLink} />
                    </div>
                  </div>
                  <p  className="link d-flex mb-0">
                    more
                    <span className='icon-arrow-right'></span>
                  </p>
                </div>
              </div>
            </article>
          )
        }
        )}
      </div>

      {
        show && <ItemDet project={project} handleClose={handleClose} />
      }
    </section>
  )
}

export default Main
