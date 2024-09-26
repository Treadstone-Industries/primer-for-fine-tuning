import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '925b8948-fc4f-4720-86d1-5872239f6e56', title: 'PATENT_TITLE_4919' },
        { id: 'd3487e26-2382-4882-bb2f-e3db138d2982', title: 'PATENT_TITLE_5590' },
        { id: '7d3366b1-e037-4e9c-8e42-937be9f43832', title: 'PATENT_TITLE_3015' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App