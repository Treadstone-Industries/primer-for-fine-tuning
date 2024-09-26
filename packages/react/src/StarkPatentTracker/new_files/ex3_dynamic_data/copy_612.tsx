import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '64213e2c-2d3b-402c-8380-c0d44549774f', title: 'PATENT_TITLE_3079' },
        { id: '44fa7aa3-d009-4b59-8a0c-c59493793266', title: 'PATENT_TITLE_1868' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App