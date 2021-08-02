import React, { Fragment } from 'react'
import '../css/worktemplate.css'
import {FiLink} from 'react-icons/fi';
import {DiCodeBadge} from 'react-icons/di'
import { useDispatch, useSelector } from 'react-redux';
import '../css/form.css'
function WorkTemplate() {
    const { workData} = useSelector((state) => state.works)
    const { projectData} = useSelector((state) => state.project)
    const { educationData} = useSelector((state) => state.education)
    const { softwareToolData} = useSelector((state) => state.softwareTools)
    const { skillsData} = useSelector((state) => state.skills)
    console.log("skillsData",  skillsData)
    return (
        <div className='work-template'>
            <div className='work-template-left'>
                <p className= 'work-template-left-h3'>Work Experience</p>
               {workData.map((item, index)=>{return(<div key={index+1} className='work-template-left-items'>
                    <p className= 'work-template-left-position'>{item.position}</p>
                    <p className= 'work-template-left-date'>{item.startDate}{" -- "}{item.endDate}{" -- "}{item.location}</p>
                    <p className= 'work-template-left-explanation'>{item.explanation}</p>
                    
                    <p className= 'work-template-left-used-tech-list-header'> Technologies Used:</p>
                        <div className= 'work-template-left-used-tech-list'>
                        {item.technologies.map((tech, indx)=>{return( <p key={indx+1} className='work-template-chipinput'>{tech}</p>)})}
                       
                        </div>
                </div>)}) }
                

                <p className= 'work-template-left-h3'>Software Projects</p>

                {
                    projectData.map((prjtData,prj_index)=>{return (
                        <div className='work-template-left-items'>
                        <p className= 'work-template-left-position'>{prjtData.position}</p>
                        <p className= 'work-template-left-date'>{prjtData.startDate} {" -- "}{prjtData.endDate}</p>
                        <p className= 'work-template-left-explanation'>{prjtData.explanation}</p>
                        
                        <p className= 'work-template-left-used-tech-list-header'> Technologies Used:</p>
                            <div className= 'work-template-left-used-tech-list'>
                            {prjtData.technologies.map((tech_prj, indx_prj)=>{return( <p key={indx_prj+1} className='work-template-chipinput'>{tech_prj}</p>)})}
                            <p className='work-template-chipinput'>Python</p>
                            </div>
                        <a href={prjtData.sourceCode} className= 'work-template-left-used-tech-list-header'><DiCodeBadge style={{color:'#4285f4', position:'relative', top:'1px', marginRight:'10px'}}/>SourceCode</a>
                        <a href={prjtData.liveDemo} className= 'work-template-left-used-tech-list-header'><FiLink style={{color:'#4285f4', position:'relative', top:'1px', marginRight:'10px'}}/>LiveDemo</a>
                    </div>

                    )})
                }

               
                

            </div>
            <div className='work-template-right'>
            <p className= 'work-template-left-h3'>Education</p>
           { educationData.map((educData, educ_index)=>{return(
               <div key={educ_index+1} className='work-template-rights-items'>
               <p className= 'work-template-left-position'>{educData.degree}</p>
               <p className= 'work-template-left-date'>{educData.startDate} {"---"}    {educData.endDate}</p>
               <p className= 'work-template-left-explanation'>{educData.location}</p>
               
           </div>
           )})}

        

            <p className= 'work-template-left-h3'>Software Sklills</p>

            
                {softwareToolData.map((tool,tool_index)=>{return(
                  
            <div  className='work-template-left-div'>
              
                 <div
                  style={{
                    border: "1px solid  #9EB1D7",
                    width: "100%",
                    position: "relative",
                    zIndex:'-1'
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    top: "-15px",
                    borderBottom: "3px solid #4267B2 ",
                    width: `${tool.split(":")[1]}%`,
                    padding:'1px',
                    zIndex:'2',
                    fontSize:'9px',
                    fontWeight:'200'
                  }}
                  key={tool_index + 1}
                >
                    {tool }%
                </div>
           
        </div>
)})}
                
      
           
              <p className= 'work-template-left-h3'> Sklills</p>
            <div className= 'work-template-left-used-tech-list'>
                    {skillsData.map((skill_item, skill_index)=>{
                      
                         return (<p className='work-template-chipinput'>{skill_item}</p>)
                    })}
                   
                    </div>

            </div>
           
            
        </div>
      
    )
}

export default WorkTemplate
