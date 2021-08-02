

import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeader } from "../actions/header";
import '../css/form.css'
import { VscChromeClose } from "react-icons/vsc";
import {createWork} from '../actions/work'
import {createProject} from '../actions/project'
function FormWork() {
    

    const dispatch = useDispatch()
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('');
    const [projectWork, setProjectWork]=useState(true)

    const [workData, setWorkData] = useState({ position: '', location: '', startDate: '',endDate:'',explanation:"", technologies:[],liveDemo:'',sourceCode:'' });
    
    const handleSubmit = (event) => {

        if(projectWork){
        
            dispatch(createWork(workData))
            setWorkData({  position: '', location: '', startDate: '',endDate:'',explanation:"", technologies:[],liveDemo:'',sourceCode:''});

        }
        else{
            dispatch(createProject(workData))
            setWorkData({  position: '', location: '', startDate: '',endDate:'',explanation:"", technologies:[],liveDemo:'',sourceCode:''});

            

        }
 
        event.preventDefault()

    }
    const keyHandleEvent = (event) => {
        if (event.key == 'Enter') {
          setTags([...tags, tag])
          setTag('')
          
          event.preventDefault();
        }
      }

    const clear = () => {

        setWorkData({  position: '', location: '', startDate: '',endDate:'',explanation:"", technologies:[],liveDemo:'',sourceCode:''});
    };
    const changeProjectWork =()=>{
        setProjectWork(!projectWork)
    }
    const handleDeleteLabel = (item) => {
        let new_list = tags.filter((tag) => (tag !== item))
        setTags(new_list)
      }

      useEffect(() => {
        setWorkData({...workData, technologies:tags})
          
       
        return () => {
            
        }
    }, [tags])

    return (
    
        
       
                   
        <form id='form' className="form-work" onSubmit={(e) => handleSubmit(e)}>
            <div className="division-section-form-p ">{projectWork?'Work':'Projects'} Info</div>
             <div className="form-work-label-div">
                        {tags.map((item, index) => {
                        return (<p className='chipinput-div'><h4>{item}</h4><button onClick={() => handleDeleteLabel(item)}><VscChromeClose /></button></p>)
                        })}
            </div>
            
            <div className="form-work-body-div">

                <div class="form-group">
                    <label for="title">Technologies</label>
                    <input type="text"  name='' value={tag} onChange={(e) => setTag(e.target.value)} onKeyPress={(e) => (keyHandleEvent(e))} placeholder="Which technologies are used  like Docker,Django,ReactJS etc." />
                </div>
                {projectWork?(<div class="form-group">
                    <label for="tags">Location</label>
                    <input type="text"  name='location' value={workData.location} onChange={(e) => setWorkData({ ...workData, location: e.target.value })} placeholder="Brusels, Belgium" />
                </div>):null}
                

                <div class="form-group">
                    <label for="tags">{projectWork?'Position':'Name of Project'}</label>
                    <input type="text"  name='location' value={workData.position} onChange={(e) => setWorkData({ ...workData, position: e.target.value })} placeholder={projectWork?" like Python Developer":"Name of your project"}/>
                </div>


                <div className="form-group">
                    <label for="message">Start Date</label>
                    <input type="text"  name="startDate" value={workData.startDate} onChange={(e) => setWorkData({ ...workData, startDate: e.target.value })} placeholder="ex:June 2019 "></input>

                </div>
                <div className="form-group">
                    <label for="message">End Date</label>
                    <input type="link" name="endDate" value={workData.endDate} onChange={(e) =>setWorkData({ ...workData, endDate: e.target.value })} placeholder="ex:July 2020"></input>

                </div>
                {!projectWork?(<Fragment>
                    <div className="form-group">
                    <label for="message">Live Demo</label>
                    <input type="url"  name="liveDemo" value={workData.liveDemo} onChange={(e) => setWorkData({ ...workData, liveDemo: e.target.value })} placeholder="ex:herokuBlogApp.com "></input>

                </div>
                <div className="form-group">
                    <label for="message">sourceCode</label>
                    <input type="url" name="sourceCode" value={workData.sourceCode} onChange={(e) =>setWorkData({ ...workData, sourceCode: e.target.value })} placeholder="ex:github.com/sudokusolver"></input>

                </div>
                </Fragment>
                ):null}
                

                <div className="form-group"> 
                            <label for="message">Explanation</label>
                            <textarea id="message" name="message" value={workData.explanation} onChange={(e)=>setWorkData({...workData, explanation:e.target.value})}  rows="5" cols="5"></textarea>

                            </div>
                <div className="form-group-button">
                    <input className='send-button' type="submit" on value="Send" />

                    <input className='clear-button' type="button" onClick={(e) => { clear() }} value="Clear" />
                    <input className='change-button' type="button" onClick={changeProjectWork} value={projectWork?'Projects':'Work'} />
                </div>
             


            </div>
        </form>
      


    )
}

export default FormWork
