import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a3a044de-ea60-43eb-b046-fa4f6acdf6df', title: 'PATENT_TITLE_4700' },
        { id: 'b0892489-95db-4fde-831d-7f58069b6f31', title: 'PATENT_TITLE_3166' },
        { id: 'a6639bc4-0eb7-4d15-a6e8-a5eced201318', title: 'PATENT_TITLE_4071' },
        { id: 'd0ff0002-87ea-4ae8-85a1-870f552c52c7', title: 'PATENT_TITLE_6352' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App