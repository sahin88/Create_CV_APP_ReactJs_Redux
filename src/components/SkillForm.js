
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../css/form.css'
import { VscChromeClose } from "react-icons/vsc";
import {createSkills} from '../actions/skills'
function SkillForm() {


    const dispatch = useDispatch()
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const handleSubmit = (event) => {
     
        dispatch(createSkills(tags))
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

        setTags([]);
    };
    const handleDeleteLabel = (item) => {
        let new_list = tags.filter((tag) => (tag !== item))
        setTags(new_list)
      }


    return (
              
                   
        <form id='form' className="form-work" onSubmit={(e) => handleSubmit(e)}>
            <div className="division-section-form-p ">Skills</div>
             <div className="form-work-label-div">
                        {tags.map((item, index) => {
                        return (<p className='chipinput-div'><h4>{item}</h4><button onClick={() => handleDeleteLabel(item)}><VscChromeClose /></button></p>)
                        })}
            </div>
            
            <div className="form-work-body-div">

                <div class="form-group">
                    <label for="title">Software Skills</label>
                    <input type="text"  name='' value={tag} onChange={(e) => setTag(e.target.value)} onKeyPress={(e) => (keyHandleEvent(e))} placeholder="like Github,AWS etc, then  please press" />
                </div>
                <div className="form-group-button">
                            <input className='send-button' type="submit" on value="Send" />

                            <input className='clear-button' type="button" onClick={(e) => { clear() }} value="Clear" />
                </div>
            


            </div>
        </form>
      


    )
    
}

export default SkillForm
