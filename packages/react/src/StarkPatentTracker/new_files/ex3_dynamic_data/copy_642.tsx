import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e4fbbb91-44a0-4a7b-91f8-ae1ffd8da60e', title: 'PATENT_TITLE_6241' },
        { id: '8dee8e63-1430-4d18-8d84-d2342b1f0a92', title: 'PATENT_TITLE_5617' },
        { id: '36595f87-ecde-4e79-9c79-8b18dedfdf11', title: 'PATENT_TITLE_7884' },
        { id: 'b17ef6b5-cc4d-4977-98fd-c1bbe1d81107', title: 'PATENT_TITLE_7717' },
        { id: '3492dac3-8a51-4cae-aff2-59bd786fa81b', title: 'PATENT_TITLE_2247' },
        { id: '7b0c8be4-27f5-4999-af81-e56cb82a03e6', title: 'PATENT_TITLE_4373' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App