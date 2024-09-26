import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e6725bb4-07e3-4c2f-b62a-689a097eb1b5', title: 'PATENT_TITLE_5107' },
        { id: '8fe3f3e6-b91f-47f6-8cf9-f192530025d1', title: 'PATENT_TITLE_7285' },
        { id: 'bc7770b1-2d04-47aa-a523-096b4dcf01d8', title: 'PATENT_TITLE_8176' },
        { id: '9bbdd078-668c-487b-8e18-00c1e16dd735', title: 'PATENT_TITLE_9693' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App