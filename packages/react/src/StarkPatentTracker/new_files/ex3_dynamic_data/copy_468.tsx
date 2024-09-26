import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'be7651d6-55f8-4a91-867e-aa185d0af7aa', title: 'PATENT_TITLE_2788' },
        { id: 'a3f7f896-8d91-4c6d-aa02-a12f00a1e5de', title: 'PATENT_TITLE_6528' },
        { id: '4ed411dc-c738-4b9e-bdf3-ab2bba3f2388', title: 'PATENT_TITLE_3943' },
        { id: '657b54fc-0eb5-4699-9f4d-2e62d8ed7859', title: 'PATENT_TITLE_9726' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App