import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd3925ac2-c7cd-4a97-9d4f-a0f4e405bfb4', title: 'PATENT_TITLE_1536' },
            { id: '4e90bf55-5292-4027-a4ef-556c9d7d43cf', title: 'PATENT_TITLE_6886' },
            { id: 'c046610f-ab1a-4bac-850a-033c674abdf9', title: 'PATENT_TITLE_8273' },
            { id: 'bd14e1d8-f818-416c-8c80-a7d93610593f', title: 'PATENT_TITLE_3230' },
            { id: 'fa88854c-2853-46ba-b4d5-f4b18b1d52b0', title: 'PATENT_TITLE_2233' },
            { id: 'b383ffac-4406-4c2c-a96f-d45301c94ac3', title: 'PATENT_TITLE_1758' },
            { id: 'e339136b-b4a8-4265-88fc-2a16423ecbf1', title: 'PATENT_TITLE_9378' },
        ]}
    />
)

export default App