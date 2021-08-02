import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEducation } from "../actions/education";
import '../css/form.css'

function FormEducation() {
    const dispatch = useDispatch()

    const [eduData, setEduData] = useState({ degree: '', school: '', location: '',startDate: '',endDate:'' });

    const handleSubmit = (event) => {

        dispatch(createEducation(eduData))
        setEduData({degree: '', school: '', location: '',startDate: '',endDate:'' });
        event.preventDefault()

    }


    const clear = () => {

        setEduData({degree: '', school: '', location: '',startDate: '',endDate:'' });
    };

    return (
        <form id='form' className="form-heading" onSubmit={(e) => handleSubmit(e)}>
                    <div className="division-header-form-head">Education Info</div>
                    <div className="division-header-form-form">

                        <div class="form-group">
                            <label for="degree">Degree</label>
                            <input type="text" name='degree' value={eduData.degree} onChange={(e) => setEduData({ ...eduData, degree: e.target.value })} placeholder="Computer Science" />
                        </div>

                        <div class="form-group">
                            <label for="school">Name of School</label>
                            <input type="text"  name='school' value={eduData.school} onChange={(e) => setEduData({ ...eduData, school: e.target.value })} placeholder="The University of Texas Austin " />
                        </div>

                        <div className="form-group">
                            <label for="location">Country</label>
                            <input type="text" id="location" name="location" value={eduData.location} onChange={(e) => setEduData({ ...eduData, location: e.target.value })} placeholder="ex: San Fransico, USA"></input>

                        </div>
                        <div className="form-group">
                            <label for="startDate">startDate</label>
                            <input type="link" name="startDate" value={eduData.startDate} onChange={(e) => setEduData({ ...eduData, startDate: e.target.value })} placeholder="Start Year ex:June 2011"></input>

                        </div>
                        <div className="form-group">
                            <label for="endDate">endDate</label>
                            <input type="link" name="startDate" value={eduData.endDate} onChange={(e) => setEduData({ ...eduData, endDate: e.target.value })} placeholder="End Year ex:June 2014"></input>

                        </div>
                        <div className="form-group-button">
                            <input className='send-button' type="submit" on value="Send" />

                            <input className='clear-button' type="button" onClick={(e) => { clear() }} value="Clear" />
                        </div>
                     


                    </div>
                </form>


    )
}

export default FormEducation
