import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ada69b42-f9ad-4ba0-af01-234f86adc5be', title: 'PATENT_TITLE_8509' },
        { id: '2ef99eb1-c3a5-4a7c-90e5-4c29f0b6bb59', title: 'PATENT_TITLE_8374' },
        { id: '8fd55239-a38d-4970-bd63-afe4d030c45c', title: 'PATENT_TITLE_6910' },
        { id: '38c94384-8baf-4fe8-916c-4e2827c919df', title: 'PATENT_TITLE_9871' },
        { id: 'a52e2495-2a99-4c18-b48a-59d1eaf7e6f5', title: 'PATENT_TITLE_7096' },
        { id: '97cd2029-8474-4265-8731-08621d184451', title: 'PATENT_TITLE_4767' },
        { id: 'fbea4e13-5f16-476f-bb88-a006b5f10bd5', title: 'PATENT_TITLE_8292' },
        { id: '6a08487f-5369-44b8-856a-ecf9e9a40d9d', title: 'PATENT_TITLE_8946' },
        { id: '21be3f9b-fc86-4658-98e7-1a29dafe30a1', title: 'PATENT_TITLE_6753' },
        { id: 'ce815275-7965-4c36-a9a1-e23571a61048', title: 'PATENT_TITLE_3077' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App