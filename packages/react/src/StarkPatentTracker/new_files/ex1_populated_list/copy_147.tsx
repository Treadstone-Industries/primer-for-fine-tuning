import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e790ea6f-03a3-4cfc-a2de-a4394a31c14b', title: 'PATENT_TITLE_7387' },
            { id: '01a1ee1a-e1ef-4987-896b-9d03136061da', title: 'PATENT_TITLE_3635' },
            { id: '62765b6d-0e3f-4271-bc23-9f8f0faf5cab', title: 'PATENT_TITLE_2051' },
            { id: '2b73d757-810d-4919-9f76-ae9e266e2753', title: 'PATENT_TITLE_2364' },
            { id: '3dd640d8-c8d0-46e7-ac3b-e2f5c0c1334b', title: 'PATENT_TITLE_8112' },
            { id: 'a56f32c6-74b0-488b-9e09-8f36d50d0250', title: 'PATENT_TITLE_3763' },
        ]}
    />
)

export default App