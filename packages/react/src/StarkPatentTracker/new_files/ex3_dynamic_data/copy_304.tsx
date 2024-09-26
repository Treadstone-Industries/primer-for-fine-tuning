import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e51211f0-ad40-4817-bb76-5f9ce7f7da48', title: 'PATENT_TITLE_7744' },
        { id: '4fd4bff4-f682-432a-a1bf-77fe6850c2c7', title: 'PATENT_TITLE_1386' },
        { id: '079044de-b88d-46f4-b1df-6b2227817c78', title: 'PATENT_TITLE_8651' },
        { id: '06ff447b-9f50-46cf-99fb-ed28f864cde4', title: 'PATENT_TITLE_9010' },
        { id: '0d7b38c3-fa39-4eae-a065-913944a3331e', title: 'PATENT_TITLE_3383' },
        { id: 'c94841b3-355c-4870-b6e2-aa24be1faaed', title: 'PATENT_TITLE_9131' },
        { id: '9de3e3bb-4fe9-42a2-9322-14a0e843b1bf', title: 'PATENT_TITLE_6029' },
        { id: '4c16e5d5-eb1f-4c42-b145-83da40d747ed', title: 'PATENT_TITLE_8985' },
        { id: '885a4a3b-1e88-45d4-ae0d-05375515d639', title: 'PATENT_TITLE_7073' },
        { id: 'f118898b-aff7-450d-bd31-7c6602856afe', title: 'PATENT_TITLE_8144' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App