import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6b82ce14-b2b9-4ce0-8424-950acc744a7a', title: 'PATENT_TITLE_1023' },
        { id: '108c8850-2e9e-4f8a-a009-a033b1f0fdee', title: 'PATENT_TITLE_6185' },
        { id: '961279bc-a508-4362-91b0-491975d29819', title: 'PATENT_TITLE_3333' },
        { id: '320522ac-10b0-4930-bcc5-a3c45c8ee21d', title: 'PATENT_TITLE_7408' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App