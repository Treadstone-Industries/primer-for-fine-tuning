import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fd3b08d8-1c1a-4596-9e79-b049c4613438', title: 'PATENT_TITLE_1201' },
            { id: '0cf54f53-fed7-4994-aeb5-44cd94a73fed', title: 'PATENT_TITLE_6922' },
            { id: 'e0ed1b0c-635c-46e6-b154-f81ceef8068a', title: 'PATENT_TITLE_8172' },
            { id: '2bf78b76-d664-45fc-a74c-81224f0b863b', title: 'PATENT_TITLE_4666' },
            { id: 'aff05dc5-79cc-4030-b94c-b180b7299506', title: 'PATENT_TITLE_4713' },
            { id: 'afff70c0-aee4-4226-a8bf-60961130a55c', title: 'PATENT_TITLE_4267' },
        ]}
    />
)

export default App