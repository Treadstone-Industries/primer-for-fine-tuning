import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '51bcbbb7-7d19-41bf-a67f-1dd07809b967', title: 'PATENT_TITLE_4160' },
        { id: 'fe916587-c1c8-4d68-b03d-34df9cc5fa16', title: 'PATENT_TITLE_8844' },
        { id: '134a4a4b-ff22-4f0a-a770-b9672fed7ef6', title: 'PATENT_TITLE_8126' },
        { id: '51625b8e-4b11-4d98-9d7d-cd8f5e3ff717', title: 'PATENT_TITLE_8458' },
        { id: '9d0b5c2b-05c3-49ba-8b5a-6b39c29b13c1', title: 'PATENT_TITLE_9127' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App