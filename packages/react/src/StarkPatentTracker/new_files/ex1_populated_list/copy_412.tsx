import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '030ebc8e-5bd9-4b9c-9199-1259b5a9c486', title: 'PATENT_TITLE_1321' },
            { id: 'b8d13384-6b06-4160-a539-8cee193a13e7', title: 'PATENT_TITLE_8612' },
            { id: '26b26fea-7e6d-4644-8db8-0f35b1cc8b1f', title: 'PATENT_TITLE_6160' },
            { id: '9b6f47e5-a6d0-491c-85b2-a7b3878fb384', title: 'PATENT_TITLE_9323' },
            { id: '6b1b3201-2956-4ae7-89f4-70de87d0036a', title: 'PATENT_TITLE_7780' },
            { id: 'a3411a9d-a698-4ac9-aed1-589c7b972c03', title: 'PATENT_TITLE_1428' },
        ]}
    />
)

export default App