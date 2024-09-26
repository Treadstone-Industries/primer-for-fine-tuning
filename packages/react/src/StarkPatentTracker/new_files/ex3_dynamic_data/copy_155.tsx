import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f98e416e-9315-4ff4-b4c5-6c459db85fe3', title: 'PATENT_TITLE_7325' },
        { id: '12b960b1-e5e7-43bc-9dd4-094560f557d0', title: 'PATENT_TITLE_6837' },
        { id: '64743ab9-33af-4b7f-8eb7-72e6437265d3', title: 'PATENT_TITLE_4994' },
        { id: 'a4cba189-99cc-4d4c-99e7-ab2a211d9d7d', title: 'PATENT_TITLE_3754' },
        { id: 'a103ae3d-e95a-4754-956c-0e16b98f7ffa', title: 'PATENT_TITLE_6329' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App