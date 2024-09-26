import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cca2d4ee-01b5-4e93-9914-3e617a190d18', title: 'PATENT_TITLE_4637' },
        { id: 'b5c395ca-cbba-423a-a966-1d82e9cc08d4', title: 'PATENT_TITLE_8304' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App