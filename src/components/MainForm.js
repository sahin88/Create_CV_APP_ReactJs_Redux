
import React from 'react'
import FormHeader from './FormHeader'
import FormWork from './FormWork'
import '../css/mainform.css'
import FormEducation from './FormEducation'
import SkillForm from './SkillForm'
import SoftwareTools from './SoftwareTools'

function MainForm() {
    return (
        <div className={"main-form"}>
            <FormHeader />
            <FormWork/>
            <FormEducation/>
            <SkillForm/>
            <SoftwareTools/>



        </div>
    )
}

export default MainForm
