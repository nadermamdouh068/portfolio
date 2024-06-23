import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandPrisma } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { TiCss3 } from "react-icons/ti";


const ItemDet = ({ handleClose, project }) => {

    return (
        <div className="layout-item" onClick={handleClose}>
            <div className=" main-card">
                <article className="content-item-det w-100">
                    <img src={project.img} alt="" height={300} className='w-100' />
                    <div className="card-box w-100 align-items-center" >
                        <h1 className="title">
                            {project.title} - <span className="opacity-50 text-capitalize fs-5">{project.organisation}</span>
                        </h1>
                        <p className="desc">
                            {project.long_desc}
                        </p>
                        <div className="link-icon fs-5">
                            <div className="d-flex gap-3 align-items-center icon-color flex-wrap">
                                {project.programming_language.split(" - ").map((item, index) => {
                                    if (item.includes("R")) {
                                        return <FaReact key={index} />
                                    } else if (item.includes("N")) {
                                        return <FaNode key={index} />
                                    } else if (item.includes("M")) {
                                        return <SiMysql key={index} />
                                    } else if (item.includes("E")) {
                                        return <SiExpress key={index} />
                                    } else if (item.includes("B")) {
                                        return <FaBootstrap key={index} />
                                    } else if (item.includes("J")) {
                                        return <FaNodeJs key={index} />
                                    } else if (item.includes("P")) {
                                        return <TbBrandPrisma key={index} />
                                    } else if (item.includes("C")) {
                                        return <TiCss3 key={index} />
                                    } else if (item.includes("H")) {
                                        return <ImHtmlFive2 key={index} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default ItemDet
