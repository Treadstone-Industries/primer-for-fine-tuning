import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c93e7538-df33-4dfa-be4e-9393fe57aa76', title: 'PATENT_TITLE_4723' },
            { id: '3ccc4ad1-cd81-4e92-a80f-10e7d28f4bd9', title: 'PATENT_TITLE_6622' },
            { id: '02ae918a-09ac-42a9-bc7b-759541c2c12c', title: 'PATENT_TITLE_3355' },
            { id: '80163eb7-613b-4789-b825-ae9b9eb3348a', title: 'PATENT_TITLE_2172' },
            { id: 'de12436d-980d-4a0f-b587-36257a43a57c', title: 'PATENT_TITLE_6741' },
        ]}
    />
)

export default App