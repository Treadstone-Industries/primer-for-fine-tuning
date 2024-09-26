import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '136ae62c-7065-4b3c-b3c5-ea80e1dcfe7b', title: 'PATENT_TITLE_9848' },
            { id: 'f3d69d2d-eeb6-417c-b17d-73721b8dff38', title: 'PATENT_TITLE_7345' },
            { id: '2073ff22-0df7-41c5-9175-25413939711b', title: 'PATENT_TITLE_2884' },
            { id: '00e37135-9bda-4142-b317-757f5a831431', title: 'PATENT_TITLE_9635' },
            { id: '46acb3f9-1aec-4a84-bc84-3d6eef726bb0', title: 'PATENT_TITLE_7122' },
            { id: 'a570a86b-e884-45dc-89ab-c411e606e124', title: 'PATENT_TITLE_5054' },
            { id: '282994b8-6a01-4c66-a2c5-59e746b19fe0', title: 'PATENT_TITLE_4443' },
            { id: '41782dac-c150-4083-a2d3-2f72c3ab0e32', title: 'PATENT_TITLE_1899' },
        ]}
    />
)

export default App