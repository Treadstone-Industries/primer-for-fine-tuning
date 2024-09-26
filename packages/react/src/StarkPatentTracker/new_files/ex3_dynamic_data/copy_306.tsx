import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3a0b8e0c-0cb4-4eb4-8890-908165bc320d', title: 'PATENT_TITLE_3307' },
        { id: '70297527-3d24-4d28-999c-1879fe4ecc57', title: 'PATENT_TITLE_2917' },
        { id: '3501c925-9c01-48f7-8a5d-3b0c64ffc77c', title: 'PATENT_TITLE_7172' },
        { id: '94c18d6f-107a-4bee-a9a3-8e476f959101', title: 'PATENT_TITLE_1635' },
        { id: '4ef770e7-ad21-488e-aa69-55e8f2f1c71d', title: 'PATENT_TITLE_2908' },
        { id: '4dee77d5-844e-4ab5-9ac3-4720a206b03c', title: 'PATENT_TITLE_9073' },
        { id: 'fef267a5-685f-47cd-aae1-c00b2c976260', title: 'PATENT_TITLE_8864' },
        { id: '77c41f3f-9e99-4b5a-ac25-ab9969b7725d', title: 'PATENT_TITLE_5641' },
        { id: 'b381c213-ca6b-44dc-bd35-3d109e80c963', title: 'PATENT_TITLE_4117' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App