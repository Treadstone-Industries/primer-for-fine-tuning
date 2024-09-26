import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c5e7c0f2-a8f9-4c3a-ac00-325cd7fc5c18', title: 'PATENT_TITLE_9341' },
        { id: '514f09d4-c989-41ba-928b-398a861771f1', title: 'PATENT_TITLE_8928' },
        { id: '92871e4d-4b2a-46fc-a22c-55161b8e73d6', title: 'PATENT_TITLE_3418' },
        { id: '163bf3ba-5704-4921-ade5-dd916cb1a592', title: 'PATENT_TITLE_4470' },
        { id: 'cfb71361-2b17-48f9-8217-8f2a35b76f2d', title: 'PATENT_TITLE_8757' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App