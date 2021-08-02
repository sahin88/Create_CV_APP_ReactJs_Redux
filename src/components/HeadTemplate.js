import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../css/headetemplate.css' 
import {FiMail} from 'react-icons/fi';
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
function HeadTemplate() {

    const dispatch = useDispatch()
    const { headerData } = useSelector((state) => state.header)
 
    // console.log("headerData",headerData,"workData", workData,"projectData",projectData)
    
    return (
        <div className='header-template'>
         { headerData.map((item,index)=>{return(<Fragment>
                <div className="headertemplate-right">
                <p className="headertemplate-right-name">{item.name}</p>
                <p><FiMail style={{color:'#fff', position:'relative', top:'2px', marginRight:'10px'}}/>{item.email}</p>
                <p><AiOutlinePhone   style={{color:'#fff', position:'relative', top:'2px', marginRight:'10px'}}/>{item.phone}</p>
            </div>
         <div className="headertemplate-left">
         <a className="headertemplate-left-a" href={item.github}><AiOutlineGithub  style={{color:'#fff', position:'relative', top:'2px', marginRight:'10px'}}/>Github</a>
           


         </div>
         </Fragment>
         )})  
    }

        </div>
    )
}

export default HeadTemplate


// {headerData.map((item, index) => {
//     return (<div>
     
//         <h3 key={index + 1}>{item.name}</h3>
//     </div>)
// })}
