import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f3d1da36-7c90-44ae-83dd-7eb085aa7a7c', title: 'PATENT_TITLE_6062' },
        { id: 'ecbbadc0-ce1a-4f04-963b-3a26847ffaf9', title: 'PATENT_TITLE_6284' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App