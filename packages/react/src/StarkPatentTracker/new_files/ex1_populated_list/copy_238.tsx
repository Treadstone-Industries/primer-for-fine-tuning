import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ed9090d2-c21c-4c01-bee7-b74fe87260c8', title: 'PATENT_TITLE_3115' },
            { id: '616da2a7-e072-496e-86a4-b4b8fd9fdbaa', title: 'PATENT_TITLE_8655' },
            { id: 'ea623a46-f654-4d43-9e8f-c61458d92991', title: 'PATENT_TITLE_5118' },
            { id: '6b21f835-fd41-4ead-a84c-c3aeafa21bbb', title: 'PATENT_TITLE_1410' },
            { id: 'f6f43243-11bc-4e6a-9ea3-6cc0b5e23747', title: 'PATENT_TITLE_2575' },
            { id: '54c98694-6810-4bbd-b211-7a292849453d', title: 'PATENT_TITLE_9732' },
            { id: '4f189ac5-11eb-482f-8b19-73a764e47cb2', title: 'PATENT_TITLE_9401' },
            { id: 'ba552659-7fa6-40c8-9ff2-c3785809bf78', title: 'PATENT_TITLE_9260' },
            { id: '729fd847-fb6a-4add-8eeb-648fe99f67d2', title: 'PATENT_TITLE_9726' },
            { id: '564c0c01-5d38-404b-8c32-80608fd4f7dd', title: 'PATENT_TITLE_4396' },
        ]}
    />
)

export default App