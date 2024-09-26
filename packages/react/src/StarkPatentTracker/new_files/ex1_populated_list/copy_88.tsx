import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6953a5d3-ce7c-41b1-a016-d38ad43d09e3', title: 'PATENT_TITLE_5114' },
            { id: '8b491c59-b141-4e1b-81f7-5f4a2163d8db', title: 'PATENT_TITLE_5218' },
            { id: '58814fd2-524d-4ee2-a9ba-a6fb704516c1', title: 'PATENT_TITLE_7822' },
            { id: '6b444312-69dd-449b-b7a8-1e22962b3adc', title: 'PATENT_TITLE_3600' },
            { id: 'f33cedf7-540d-49f3-9bb0-59cb3687490a', title: 'PATENT_TITLE_2290' },
            { id: 'ffb530ab-2e90-4e0c-91d6-c836c33ee2d1', title: 'PATENT_TITLE_7125' },
            { id: '44a8da0e-cea3-4664-afb0-f232ae0d5993', title: 'PATENT_TITLE_3583' },
        ]}
    />
)

export default App