import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '77e6bcc3-2120-4a8f-802d-967d59d0b275', title: 'PATENT_TITLE_7356' },
        { id: '3c01c5f4-b0e9-4b1a-b638-b942bec32af3', title: 'PATENT_TITLE_9765' },
        { id: 'f87a679a-3214-4ab3-8be3-d81c2b589bee', title: 'PATENT_TITLE_4513' },
        { id: 'c89c41fd-c7e1-4308-956d-86d218b97454', title: 'PATENT_TITLE_8855' },
        { id: '816a97c9-ae2b-445d-a278-c8bcefbff061', title: 'PATENT_TITLE_2335' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App