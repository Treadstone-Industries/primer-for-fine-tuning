import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fd12bc9c-f9df-400c-b70e-a3e8b34f2db3', title: 'PATENT_TITLE_2293' },
            { id: '199d278b-a8a1-4a1a-b219-2a9bcd426cbf', title: 'PATENT_TITLE_1904' },
            { id: '1b31335a-b8b8-435d-8f21-d33b867453f7', title: 'PATENT_TITLE_1282' },
            { id: '5c470a06-b4ee-42b5-adc8-267688068e4b', title: 'PATENT_TITLE_5248' },
            { id: '1fd65d4d-db12-421f-9d8c-f8da43a232c8', title: 'PATENT_TITLE_8673' },
            { id: '3e78458c-f918-47b8-a7e1-cc7c89263599', title: 'PATENT_TITLE_8645' },
        ]}
    />
)

export default App