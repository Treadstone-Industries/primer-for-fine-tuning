import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '01024a92-a5e0-43df-a6b9-80deedabb3b3', title: 'PATENT_TITLE_6230' },
        { id: '2bb4a48a-5525-462d-bd1a-d8f9a34f48f0', title: 'PATENT_TITLE_9465' },
        { id: 'a39caf13-5000-45bc-8e4f-93b2bc9a7118', title: 'PATENT_TITLE_7680' },
        { id: '7e219e24-2c73-4b1c-a2ea-2f8352fcb621', title: 'PATENT_TITLE_8381' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App