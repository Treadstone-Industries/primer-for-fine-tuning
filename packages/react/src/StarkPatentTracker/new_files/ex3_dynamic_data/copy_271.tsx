import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7ca65c21-6302-4186-bd41-544e8956f04c', title: 'PATENT_TITLE_8871' },
        { id: 'ef467226-f15a-47dd-a0f4-5159f9647403', title: 'PATENT_TITLE_4761' },
        { id: 'eb249c6e-63a1-4217-acae-8dcdde7df4f0', title: 'PATENT_TITLE_1102' },
        { id: '21e0130d-5822-4b36-9ef4-8867c979bc5c', title: 'PATENT_TITLE_9044' },
        { id: '3cdfb1fc-6d41-4fff-b959-9a3c92b38ef8', title: 'PATENT_TITLE_1018' },
        { id: '12ef23ea-eb84-41ad-86ea-e0eaf638ab38', title: 'PATENT_TITLE_7429' },
        { id: '9fb955d2-8ad7-4c99-bee9-d47a10e3dadf', title: 'PATENT_TITLE_4069' },
        { id: '0732e659-29f4-4f5c-83e7-51961ace5ebd', title: 'PATENT_TITLE_8124' },
        { id: 'd9abd6a2-cd47-42bb-97c0-47c7709878e1', title: 'PATENT_TITLE_8384' },
        { id: '155e7d7a-c132-4acd-854f-8c8929541524', title: 'PATENT_TITLE_5919' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App