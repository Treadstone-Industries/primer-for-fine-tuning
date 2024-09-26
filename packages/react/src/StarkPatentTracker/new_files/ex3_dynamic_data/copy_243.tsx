import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f7123891-e78f-426f-a1ad-3c456031b77b', title: 'PATENT_TITLE_4073' },
        { id: '987b876f-9b6d-4360-870c-c9fc43a2f17d', title: 'PATENT_TITLE_1472' },
        { id: '7e9ef319-70be-44d8-9fc5-00fd61c00add', title: 'PATENT_TITLE_5850' },
        { id: 'c6e44cb6-a1fc-40f4-9e3c-42de4df6db96', title: 'PATENT_TITLE_7769' },
        { id: 'c58f8cf9-3d40-4197-8f70-a6b22a981173', title: 'PATENT_TITLE_3825' },
        { id: 'b521a39d-1550-4fa0-b46e-9afebed87234', title: 'PATENT_TITLE_8877' },
        { id: '4430c85e-6ca5-4a13-a57a-e2ef931aa30d', title: 'PATENT_TITLE_7968' },
        { id: 'bc6e9185-f092-4789-8872-f562f84750f5', title: 'PATENT_TITLE_5148' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App