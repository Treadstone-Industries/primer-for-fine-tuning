import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0529641e-1b78-458a-a317-cdd1873ab8c0', title: 'PATENT_TITLE_6694' },
        { id: 'fe6b24b6-0445-4480-b336-201542e9365a', title: 'PATENT_TITLE_1155' },
        { id: '52d9add3-e1a8-457d-9fbd-49090e3c5051', title: 'PATENT_TITLE_8080' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App