import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cc2ccde5-437b-4329-9f7d-3f90730771b5', title: 'PATENT_TITLE_5731' },
        { id: '5b4c5c64-8a5a-441e-84c9-51cde4573807', title: 'PATENT_TITLE_6522' },
        { id: '16d4b322-3f6d-43a5-9335-d5e2aca0087e', title: 'PATENT_TITLE_2943' },
        { id: 'd8dc6a0f-4d0b-4867-9c74-91c1243f8d6e', title: 'PATENT_TITLE_5664' },
        { id: 'c8e15bce-4779-40d8-aa44-bb1ce0890994', title: 'PATENT_TITLE_7208' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App