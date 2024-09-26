import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6f1b9a37-2186-4bff-97fe-9db79681a3de', title: 'PATENT_TITLE_4715' },
        { id: '82525a2c-0392-4f40-b5cd-fb21c17df853', title: 'PATENT_TITLE_5121' },
        { id: '921bb692-0b64-4df5-81f1-ef2c2e95a5a3', title: 'PATENT_TITLE_7782' },
        { id: '6eaba996-cd58-44ee-88cf-37ccbc363e6c', title: 'PATENT_TITLE_4022' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App