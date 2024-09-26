import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e580862b-e05f-425e-9b9f-47e0f4743015', title: 'PATENT_TITLE_4705' },
            { id: '98aa9c15-63af-4bbd-99d7-a9ad9b8d6aa3', title: 'PATENT_TITLE_6782' },
            { id: 'e5985128-5dd3-4abb-ac56-15ee57b0ec59', title: 'PATENT_TITLE_6809' },
            { id: 'b8e6c1bb-ee4b-403d-aa21-c3bf1cb23f14', title: 'PATENT_TITLE_2300' },
            { id: '5120b320-4fca-40e2-97eb-3245ef4e8b4d', title: 'PATENT_TITLE_7807' },
            { id: '55dab22a-4ea0-4372-954f-8fef9575f58b', title: 'PATENT_TITLE_6089' },
        ]}
    />
)

export default App