import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'efbd0b7a-ddb8-44e7-9803-0d6d7937cfeb', title: 'PATENT_TITLE_2744' },
            { id: '2e6bd60f-d9c3-4c74-8933-895c27e43e5d', title: 'PATENT_TITLE_3266' },
            { id: '5bf38bf5-3509-439a-931d-c9d7ff565276', title: 'PATENT_TITLE_8027' },
            { id: '510efd28-73e2-4132-a42f-0142887a6af9', title: 'PATENT_TITLE_1483' },
            { id: 'a1cc95d7-3b4b-4fa7-82f1-e5181c259932', title: 'PATENT_TITLE_4279' },
            { id: '9af491ff-dc54-402a-9741-e59f33f85d69', title: 'PATENT_TITLE_7524' },
            { id: 'a338c536-ecda-422f-bd29-07188e478dec', title: 'PATENT_TITLE_7310' },
            { id: '55fdda37-3d4a-4a16-a4a2-1b99796e98b3', title: 'PATENT_TITLE_5983' },
        ]}
    />
)

export default App