import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '65e93d6f-915a-442a-a27a-26b0fb84eb07', title: 'PATENT_TITLE_6511' },
        { id: 'b8e170f7-d092-4cfe-a6a9-bbacac26f22f', title: 'PATENT_TITLE_4500' },
        { id: 'aa9a3864-ed89-4ab8-9a11-e58a88e14909', title: 'PATENT_TITLE_5405' },
        { id: '7bd0d39e-1be8-446f-b622-5756be8c073f', title: 'PATENT_TITLE_4363' },
        { id: 'b1f4664b-63cd-41d4-819e-e457783cc673', title: 'PATENT_TITLE_1588' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App