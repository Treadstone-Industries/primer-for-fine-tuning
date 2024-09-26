import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '506afa3f-bb45-42df-94e2-7dff44bdc307', title: 'PATENT_TITLE_3988' },
        { id: '59332da2-4670-4650-a1ca-9d0743bbe8b3', title: 'PATENT_TITLE_4979' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App