import React, { Fragment } from 'react'
import { useRef } from 'react';
import { Button } from '@material-ui/core';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import HeadTemplate from './HeadTemplate';
import { useDispatch, useSelector } from 'react-redux';
import WorkTemplate from './WorkTemplate';
function MainTemplate() {

    const pdfReactComponent = useRef(null)
    const { headerData } = useSelector((state) => state.header)
    const contentArea = useRef(null)
    const createPDF = () => {
        console.log("pdfReactComponent0", pdfReactComponent)
        pdfReactComponent.current.save()
        //savePDF(contentArea.current, { paperSize: "A4" })
    }
    const headerTemp = () => {
        return (<Fragment>
            <HeadTemplate />
             <WorkTemplate/>
            </Fragment>)
    }
    return (
        <div ref={contentArea}>

            <PDFExport ref={pdfReactComponent} paperSize="A4">

                {headerTemp()}
               

            </PDFExport>

            <Button onClick={createPDF}>Create Pdf</Button>

        </div>
    )
}

export default MainTemplate
