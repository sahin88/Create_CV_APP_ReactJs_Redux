

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeader } from "../actions/header";
import '../css/form.css'




function FormHeader() {
    const dispatch = useDispatch()

    const [eventData, setEventData] = useState({ name: '', email: '', phone: '',github:'' });

    const handleSubmit = (event) => {

        dispatch(createHeader(eventData))
        setEventData({ name: '', email: '', phone: '', github:'' });
        event.preventDefault()

    }


    const clear = () => {

        setEventData({ name: '', email: '', phone: '', github:'' });
    };


    return (
      

                   
                <form id='form' className="form-heading" onSubmit={(e) => handleSubmit(e)}>
                    <div className="division-header-form-head">Personal Information</div>
                    <div className="division-header-form-form">

                        <div class="form-group">
                            <label for="title">Name</label>
                            <input type="text" id='title' name='name' value={eventData.name} onChange={(e) => setEventData({ ...eventData, name: e.target.value })} placeholder="Your Name and Surname ex:John Doe" />
                        </div>

                        <div class="form-group">
                            <label for="tags">Email</label>
                            <input type="email" id='tags' name='email' value={eventData.email} onChange={(e) => setEventData({ ...eventData, email: e.target.value })} placeholder="Your Email" />
                        </div>

                        <div className="form-group">
                            <label for="message">Phone</label>
                            <input type="text" id="phone" name="phone" value={eventData.phone} onChange={(e) => setEventData({ ...eventData, phone: e.target.value })} placeholder="Your Email"></input>

                        </div>
                        <div className="form-group">
                            <label for="message">Github</label>
                            <input type="link" name="github" value={eventData.github} onChange={(e) => setEventData({ ...eventData, github: e.target.value })} placeholder="Your Github"></input>

                        </div>
                        <div className="form-group-button">
                            <input className='send-button' type="submit" on value="Send" />

                            <input className='clear-button' type="button" onClick={(e) => { clear() }} value="Clear" />
                        </div>
                     


                    </div>
                </form>





    )
}

export default FormHeader
