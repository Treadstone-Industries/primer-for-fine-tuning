import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fe20a260-e149-42d0-871a-c7ce210a2662', title: 'PATENT_TITLE_1584' },
        { id: '86e16fa0-d5bf-43fb-bc3d-29f53a0be561', title: 'PATENT_TITLE_1667' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App