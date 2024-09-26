import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bf936e82-4ce3-46d2-81b3-bab72653dac0', title: 'PATENT_TITLE_8173' },
            { id: '3de01fc3-8890-4be8-8f43-acaedb99d824', title: 'PATENT_TITLE_4715' },
            { id: '3d1b9934-9dde-4368-9332-addb3c9de0aa', title: 'PATENT_TITLE_4385' },
            { id: 'ec0b1526-0a5b-411d-aded-425e472db0b8', title: 'PATENT_TITLE_6575' },
        ]}
    />
)

export default App