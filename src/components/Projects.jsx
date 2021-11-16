import React from 'react'
import dataProjects from '../Projects.json'
import '../CSS/Projects.css'
import Carousel from 'react-elastic-carousel';

const Projects = () => {
    const data = dataProjects.Projects
    console.log(data)
    return (
        <div className="containerProjects">
             <Carousel>
                    {data.map((project) => (
                        <div key={project.id} className="containerProject"> 
                            <h1 className="titleProject"> {project.title} </h1>
                            <div className="containerImgProject">
                            <img className='imgProject' src={project.img} alt=''></img>   
                            <div  className='containerparagraphProject'>
                                <p className="paragraphProject"> {project.description} </p>
                                <p className='titleTools'>Herramientas utilizadas</p>
                                <div className='containerIconTools'>
                                {project.tools.map((tool) => (
                                    <div className='containerIconNameTool'>
                                    <img className='iconTools' src={tool.tool} alt=''></img>
                                     <p className='paragraphTools'> {tool.toolName} </p>
                                     </div> 
                                ))}
                                </div> 
                                <div className="containerBtnsProject">
                                 <button className="btnsProject" onClick={() => { window.location.href = project.github; }}>Github <img className='imgIconProjects' src='https://imgur.com/tRL3xvU.png' alt=''></img></button>
                                 <button className="btnsProject" onClick={() => { window.location.href = project.deploy; }}> Deploy <img className='imgIconProjects' src='https://imgur.com/0BtMbqe.png' alt=''></img> </button>
                                </div>
                            </div>
                                                         
                            </div>
                        </div>
                    ))}
             </Carousel>
        </div>
    )
}

export default Projects
