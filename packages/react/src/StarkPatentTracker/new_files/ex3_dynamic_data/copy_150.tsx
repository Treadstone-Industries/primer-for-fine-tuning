import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcf110f8-dce4-4bdd-85f9-45bc775d0df0', title: 'PATENT_TITLE_7192' },
        { id: '8c392844-32d9-42c6-8b90-f883dc9842bd', title: 'PATENT_TITLE_5180' },
        { id: '655a0077-ac7e-4bd0-ae3c-cf65453899ba', title: 'PATENT_TITLE_6081' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App