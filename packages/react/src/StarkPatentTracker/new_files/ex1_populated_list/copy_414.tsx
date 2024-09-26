import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3989d7ec-cd44-4977-a9cd-b1b8d2736e23', title: 'PATENT_TITLE_3789' },
            { id: '50062fb4-da9b-4593-8bba-63b08fe40ade', title: 'PATENT_TITLE_1945' },
            { id: 'd07a7791-233c-4c7b-b266-27cb5a22c0d2', title: 'PATENT_TITLE_9978' },
            { id: '13f8cda2-bf4a-4120-b4ec-920b12bef46b', title: 'PATENT_TITLE_6653' },
            { id: '63cef77f-cc1f-44f8-a3f3-1d1f15d05502', title: 'PATENT_TITLE_2701' },
            { id: 'b5c6748f-7602-4f84-8bce-acad7e88c184', title: 'PATENT_TITLE_9377' },
            { id: '526823be-667b-41d8-8640-0be706ae8fa7', title: 'PATENT_TITLE_9812' },
            { id: '7611566a-c2ee-4699-9ba8-38ea9f414df9', title: 'PATENT_TITLE_4586' },
            { id: 'daf1ea21-017b-4f31-b630-da574a100089', title: 'PATENT_TITLE_2436' },
            { id: '24e4ee45-2aae-4193-b3cf-e3bb1aa741ba', title: 'PATENT_TITLE_2654' },
        ]}
    />
)

export default App