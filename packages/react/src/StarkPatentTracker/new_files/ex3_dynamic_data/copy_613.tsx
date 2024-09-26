import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b17368a5-1a1b-4e66-b58f-12c649735ea7', title: 'PATENT_TITLE_1775' },
        { id: 'c1debeb9-6ed6-4be6-883d-9f93e1a666f3', title: 'PATENT_TITLE_6869' },
        { id: 'e51b91f7-d6af-4b63-abb3-8daaa9d8102f', title: 'PATENT_TITLE_9271' },
        { id: 'f06e6cb7-71a5-4171-8717-182529235fa1', title: 'PATENT_TITLE_2777' },
        { id: 'bffec37e-06ce-44f5-a8f8-0886f2ea5c23', title: 'PATENT_TITLE_7464' },
        { id: '5a63aaad-61a6-4bb8-8013-832aa98bc6de', title: 'PATENT_TITLE_7356' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App