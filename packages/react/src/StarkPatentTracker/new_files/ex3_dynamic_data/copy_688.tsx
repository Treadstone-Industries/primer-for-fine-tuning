import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd3008288-b897-4ea7-867a-eeb35718401e', title: 'PATENT_TITLE_1568' },
        { id: 'd06cc024-26f7-4d71-9d00-aef201bf5c2c', title: 'PATENT_TITLE_3392' },
        { id: '3eee3688-39a5-4714-83d3-21b5f172b9fa', title: 'PATENT_TITLE_6224' },
        { id: 'a2d1704e-9df1-4d81-b8ee-c9bf745f41b1', title: 'PATENT_TITLE_7243' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App