import zIndex from '@material-ui/core/styles/zIndex';
import React, { useState, useEffect,Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSoftwareTools } from "../actions/softwaretools";
import '../css/form.css'

function SoftwareTools() {
  const dispatch = useDispatch()
    const [volume, setVolume] = useState(1);
    const [tools, setTools] = useState("");
    const [toolList, setToolList] = useState([]);
    const handleSubmit = (event) => {
       
        dispatch(createSoftwareTools(toolList))
        console.log("gitme turna,")
       
        event.preventDefault()

    }
  
    const handleKeyPress = (e) => {
     
      if (e.key === "Enter") {
        setToolList([...toolList, `${tools}:${volume}`]);
        e.preventDefault()
      }
   
    };

    const clear = () => {

      setVolume(1);
      setTools("");
      setToolList([])
  };
  
    return (
        <form id='form' className="form-heading" >
        <div className="division-section-form-p ">Software Tools</div>
        {console.log("toollist", toolList)}
             <div className="form-work-label-div-skills">
                        {toolList.map((item, index) => {
            return (
              <div className='fragment' key={index+1}>
                <div
                  style={{
                    border: "4px solid  #9EB1D7",
                    width: "100%",
                    position: "relative",
                    zIndex:'-1'
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    top: "-40px",
                    borderBottom: "6px solid #4267B2 ",
                    width: `${item.split(":")[1]}%`,
                    padding:'5px',
                    zIndex:'2'
                  }}
                  key={index + 1}
                >
                  {item}
                </div>
              </div>
            );
          })}
            </div>
        <div class="form-group">
        <label for="degree">Software Tools</label>
          <input
            type="text"
            value={tools}
            onKeyPress={handleKeyPress}
            onChange={(e) => setTools(e.target.value)}
            placeholder='Enter your software tools like Java,JavaScript etc'
          />
          </div>
          <div class="form-group">
          <label for="degree">Your Level :{volume}</label>
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={volume}
            
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </div>
        <div className="form-group-button">
                            <input className='send-button' onClick={ handleSubmit}  type='button' value="Send" />

                            <input className='clear-button' type="button" onClick={(e) => { clear() }} value="Clear" />
                </div>
            
      </form>
    );
  }

export default SoftwareTools
