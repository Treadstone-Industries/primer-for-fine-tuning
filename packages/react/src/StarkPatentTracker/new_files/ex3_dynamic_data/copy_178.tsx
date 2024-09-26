import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b1d2ad08-543c-425f-9629-efe5eb5fa69a', title: 'PATENT_TITLE_2715' },
        { id: '0fda2ffc-af9c-44a0-9163-7804d5100c66', title: 'PATENT_TITLE_6884' },
        { id: 'af59f0bb-e645-45e0-bad8-01d3b0c11355', title: 'PATENT_TITLE_9575' },
        { id: '1de02566-59de-4067-a5f8-a8034d81f670', title: 'PATENT_TITLE_8034' },
        { id: 'ce0a1d70-527f-489f-92e7-a3feb1880706', title: 'PATENT_TITLE_4991' },
        { id: '6c2e1b42-645e-41f9-bf7b-583e058cbaa3', title: 'PATENT_TITLE_1029' },
        { id: '6c39defa-0599-4db4-9961-ffea892855c2', title: 'PATENT_TITLE_6627' },
        { id: 'f266833e-e98e-4430-9559-430d0250cb4c', title: 'PATENT_TITLE_4982' },
        { id: 'b53947cc-48b1-437d-919e-6b15250d4ef9', title: 'PATENT_TITLE_5608' },
        { id: 'c9f88dff-6dcc-4d21-9be9-49407c7b02fb', title: 'PATENT_TITLE_9811' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App