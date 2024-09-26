import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '59f800e1-975f-400e-a909-c7f11ccdb3f9', title: 'PATENT_TITLE_6161' },
        { id: '2020ac4e-0952-4e71-9d57-4e88b215b2ba', title: 'PATENT_TITLE_6639' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App