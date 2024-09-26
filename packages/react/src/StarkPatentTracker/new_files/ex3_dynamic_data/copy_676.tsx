import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5da008af-6828-4517-9842-2b97a6cc1cd2', title: 'PATENT_TITLE_5398' },
        { id: 'af957b13-2a2e-482c-af58-1955de811ec4', title: 'PATENT_TITLE_4677' },
        { id: 'cdbe0969-5163-496c-b963-49a0db5571ad', title: 'PATENT_TITLE_7643' },
        { id: '3d784da7-2c70-48e9-bba4-2842bf70d17f', title: 'PATENT_TITLE_1832' },
        { id: '19775d69-d971-464b-a707-8bd8f6315e3e', title: 'PATENT_TITLE_6885' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App