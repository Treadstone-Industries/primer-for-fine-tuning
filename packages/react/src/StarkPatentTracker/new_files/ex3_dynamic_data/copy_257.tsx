import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cfdb4db6-7c8d-43cf-879f-989c22c283c2', title: 'PATENT_TITLE_7659' },
        { id: '12a34907-b564-4540-a922-aa9bea2ea1ce', title: 'PATENT_TITLE_6781' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App