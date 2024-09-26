import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '783ed31a-a7fe-42d9-9aa5-00360b9380d8', title: 'PATENT_TITLE_3407' },
        { id: '79080c81-4325-41cc-be48-8040a15d7ade', title: 'PATENT_TITLE_3259' },
        { id: '504d1f85-872c-48ea-84fa-70f828969aaf', title: 'PATENT_TITLE_6559' },
        { id: '142ea036-4a82-4ee5-9c6b-ba9b40338d63', title: 'PATENT_TITLE_1039' },
        { id: '44a3a787-bf76-41ad-91f7-8767765741d7', title: 'PATENT_TITLE_8063' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App