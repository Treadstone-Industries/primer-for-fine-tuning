import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '58a8b271-0251-483e-a50d-d82138ec9665', title: 'PATENT_TITLE_7380' },
        { id: '85b25a7a-70ae-4b6d-92cd-656188f0b2c6', title: 'PATENT_TITLE_8127' },
        { id: '07dd2e41-5207-47e0-ba94-2e15b6c003eb', title: 'PATENT_TITLE_6759' },
        { id: '189c651f-0edd-4b69-94d5-ca3253c5479e', title: 'PATENT_TITLE_2864' },
        { id: '1a257ee3-b88c-499a-9513-5ad27d1a1994', title: 'PATENT_TITLE_8292' },
        { id: '5c89f4ec-b2b6-4172-8fe0-e7400265c481', title: 'PATENT_TITLE_5280' },
        { id: '2d78d1a7-6456-45d0-9cac-d8e24e2a9f3d', title: 'PATENT_TITLE_4967' },
        { id: '3ad6026b-af53-489e-b234-e51af515f4fb', title: 'PATENT_TITLE_5164' },
        { id: '9173882b-441a-4a5e-ac35-8c23821f148b', title: 'PATENT_TITLE_1709' },
        { id: '555b85c9-f2a8-4003-a4ff-fff1b5ac3c97', title: 'PATENT_TITLE_9572' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App