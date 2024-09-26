import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b675447d-e1ec-4ae1-84b3-0a48640a3bfc', title: 'PATENT_TITLE_8255' },
        { id: '2ab43a8c-90c1-488e-8fc9-97a65a7cb3a4', title: 'PATENT_TITLE_5084' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App