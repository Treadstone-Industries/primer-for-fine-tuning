import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '53077dbf-45e9-459b-b9b2-d11faa4f8aef', title: 'PATENT_TITLE_8137' },
            { id: '62e9917b-3a42-4ce5-94e7-f05ff2b28a9e', title: 'PATENT_TITLE_6584' },
            { id: '2c35dd59-7040-4016-8b5c-9aa4c0bf8a84', title: 'PATENT_TITLE_9417' },
            { id: '5922bc12-2aba-4d64-a9ea-44ec268573a6', title: 'PATENT_TITLE_9183' },
            { id: 'c821c9ef-86e9-443f-921b-34ddf31c1875', title: 'PATENT_TITLE_5089' },
            { id: '8c13434f-45ab-4e27-a1b6-72d4a5b8b08c', title: 'PATENT_TITLE_4038' },
            { id: '15bdb48c-8689-4819-a2d4-33d5d5e1785e', title: 'PATENT_TITLE_1140' },
            { id: '14256523-23a9-4549-9057-3c96c8884ff1', title: 'PATENT_TITLE_3744' },
        ]}
    />
)

export default App