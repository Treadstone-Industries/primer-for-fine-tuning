import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '371a7b7d-5b88-438b-b7db-3fc9508df250', title: 'PATENT_TITLE_5195' },
        { id: '32a2b5e9-d7f0-4f13-8be2-576c2b5ef1c4', title: 'PATENT_TITLE_6224' },
        { id: '4b8d5aea-7f5e-4611-bf9f-8afe09c78011', title: 'PATENT_TITLE_3116' },
        { id: '912e848f-8a49-4bda-93c8-41d70b1cffda', title: 'PATENT_TITLE_1995' },
        { id: '7c433ed9-c2ed-4d1c-87b0-ed19a090e0a9', title: 'PATENT_TITLE_4813' },
        { id: '31170692-5168-4ba8-8127-4df6ffd5be62', title: 'PATENT_TITLE_4574' },
        { id: '718f35e5-b3cd-4f2c-9286-ccfb4a692685', title: 'PATENT_TITLE_1421' },
        { id: 'f2af07fb-eb56-4a9d-b019-0f0a8862fada', title: 'PATENT_TITLE_1567' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App