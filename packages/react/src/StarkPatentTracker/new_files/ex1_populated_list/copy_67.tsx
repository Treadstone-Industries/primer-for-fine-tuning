import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cd14acce-b08a-4b03-ad04-3d644614e2ef', title: 'PATENT_TITLE_4186' },
            { id: 'bcec8c69-536d-434c-9f4b-3c3ae426ebc1', title: 'PATENT_TITLE_2627' },
            { id: '97be3000-3e49-471c-83b5-dc5a29402948', title: 'PATENT_TITLE_3914' },
            { id: 'af7274d1-798b-43b9-9ed1-4e267fe5b91b', title: 'PATENT_TITLE_8537' },
            { id: 'ddc6342f-ed7c-47ae-956f-0f90f12b174a', title: 'PATENT_TITLE_1408' },
            { id: '33d6f7eb-a2fe-4738-9d8c-ca9137bab3d1', title: 'PATENT_TITLE_2891' },
            { id: '4d4e7298-d59b-4136-80cd-436655f41d01', title: 'PATENT_TITLE_5321' },
        ]}
    />
)

export default App