import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5211c08b-739b-4d3b-a5c0-42390137fa31', title: 'PATENT_TITLE_7788' },
        { id: '5ca2ad0e-320a-4d7f-ba5d-de9ffc12a6b0', title: 'PATENT_TITLE_6824' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App