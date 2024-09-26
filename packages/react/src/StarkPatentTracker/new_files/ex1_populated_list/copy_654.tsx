import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'ac246f8c-ba66-4544-9508-865d0c207bfb', title: 'PATENT_TITLE_8748' },
            { id: '6e1fcf14-fd08-4a58-97b1-373aa8a08433', title: 'PATENT_TITLE_3695' },
            { id: '5b31d7a7-7d98-459e-8871-f86333e8fbaf', title: 'PATENT_TITLE_3375' },
            { id: 'e558f744-cbef-459f-847c-19c0f306892b', title: 'PATENT_TITLE_6712' },
            { id: '5c06f759-1242-48f3-95e0-a590e373908e', title: 'PATENT_TITLE_3124' },
        ]}
    />
)

export default App