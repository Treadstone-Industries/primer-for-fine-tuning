import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f94abcdf-d671-4d7d-b96c-69614e222793', title: 'PATENT_TITLE_3006' },
        { id: 'adc6a096-3832-4279-a5a9-bcf9b23ae329', title: 'PATENT_TITLE_4858' },
        { id: 'd3d16799-8818-499c-8c63-f020af816fb2', title: 'PATENT_TITLE_1930' },
        { id: 'f60fce08-e525-4f21-a0c4-32c41a5d98b6', title: 'PATENT_TITLE_5161' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App