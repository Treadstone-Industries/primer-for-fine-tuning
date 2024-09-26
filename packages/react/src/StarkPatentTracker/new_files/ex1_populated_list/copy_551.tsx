import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '2c5b67af-d956-4aea-becc-796aabc6f9b7', title: 'PATENT_TITLE_7772' },
            { id: 'e17ba890-b68f-4a2c-b439-fd6c9244b571', title: 'PATENT_TITLE_9295' },
            { id: '0a8bbf2f-a1da-497a-b908-5bfdc487383a', title: 'PATENT_TITLE_9214' },
            { id: 'b52ea8b1-3893-4bb8-915f-2691bdbb8a83', title: 'PATENT_TITLE_3979' },
            { id: '01703c62-7dc1-48bd-b691-9ad0118bd5ed', title: 'PATENT_TITLE_3408' },
            { id: 'baae3b1d-1b4f-4aee-b940-c599dc8afbe7', title: 'PATENT_TITLE_8650' },
        ]}
    />
)

export default App