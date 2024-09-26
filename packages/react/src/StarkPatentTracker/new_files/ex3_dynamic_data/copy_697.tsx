import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dab131a9-d05b-401e-b040-36f2ad885ffc', title: 'PATENT_TITLE_9082' },
        { id: 'aba75702-e734-4bd8-beb6-876431b38183', title: 'PATENT_TITLE_9122' },
        { id: 'ab7eed86-f763-40e0-9990-1ce5655fcf45', title: 'PATENT_TITLE_6422' },
        { id: 'f319ce0e-444f-4c76-abf8-b8d4e379a453', title: 'PATENT_TITLE_5045' },
        { id: '5b96b82d-ecb4-4c63-a729-458809ed515a', title: 'PATENT_TITLE_5941' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App