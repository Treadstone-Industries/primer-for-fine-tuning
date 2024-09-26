import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcfa3d76-663b-4c1b-a329-2437e99da61f', title: 'PATENT_TITLE_8954' },
        { id: 'e57f2c59-400d-4953-907e-8b453f73c6a0', title: 'PATENT_TITLE_8343' },
        { id: 'dbdac5a9-b648-4d22-9a20-235ed17c0f78', title: 'PATENT_TITLE_5288' },
        { id: '3a7b33cf-ef8f-4a7f-a04c-7d3ce53bd6bb', title: 'PATENT_TITLE_1101' },
        { id: '5eab344f-c0a1-4703-b1dc-c906c18a5566', title: 'PATENT_TITLE_6362' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App