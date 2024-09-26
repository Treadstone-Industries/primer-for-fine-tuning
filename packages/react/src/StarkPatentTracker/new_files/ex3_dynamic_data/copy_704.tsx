import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aed144f6-2b05-45b9-8c94-f2a72d33c86c', title: 'PATENT_TITLE_6726' },
        { id: '313ceed0-de79-4d03-9b82-1664c009b382', title: 'PATENT_TITLE_6876' },
        { id: 'f4bde381-4f4b-4a58-9f2c-43a4b2da77e9', title: 'PATENT_TITLE_8169' },
        { id: '11d9a323-940c-4fe4-925f-deb7883f2413', title: 'PATENT_TITLE_1757' },
        { id: 'd9c3403c-d640-45df-a9e0-ecf4bc1c7b75', title: 'PATENT_TITLE_6056' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App