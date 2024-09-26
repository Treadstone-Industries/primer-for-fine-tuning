import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3fd6aef9-19e0-41f2-ab9c-88d482c753f5', title: 'PATENT_TITLE_2177' },
        { id: 'd27b1b49-8837-417b-b27c-566aedfa9771', title: 'PATENT_TITLE_4735' },
        { id: 'c870eb8a-8682-4382-bdf6-d4673aadb3c8', title: 'PATENT_TITLE_9674' },
        { id: 'b65412f9-4093-42d1-ae6b-f04ff4d0f1aa', title: 'PATENT_TITLE_5407' },
        { id: 'e4d79643-3fd5-4c02-a735-c753d3f0ea9d', title: 'PATENT_TITLE_1740' },
        { id: '7e659dd1-ad67-4b8f-a01e-e442dcb3eeb8', title: 'PATENT_TITLE_1137' },
        { id: '3d4aeb2e-471e-487a-833b-b9c030bc2861', title: 'PATENT_TITLE_9879' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App