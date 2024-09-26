import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ace8565a-fdf0-4c04-b495-987204ca01c4', title: 'PATENT_TITLE_3820' },
        { id: '9ed95f2d-e716-4b6c-9daa-773d9783bc76', title: 'PATENT_TITLE_8628' },
        { id: '4966a7a1-da4d-4b28-9aa7-9fd186e15a70', title: 'PATENT_TITLE_4698' },
        { id: 'bfb45e06-d7cb-4dad-93a1-a89ec13a1fb4', title: 'PATENT_TITLE_8332' },
        { id: 'a2d618fc-9cba-47ba-bd19-344ad65df1c9', title: 'PATENT_TITLE_3486' },
        { id: '1e860a34-7358-4ac8-9f2d-cb05a8d1a239', title: 'PATENT_TITLE_1023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App