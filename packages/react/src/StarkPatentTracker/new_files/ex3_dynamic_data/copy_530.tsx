import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd8f7f5fc-eae3-462b-a9ac-71366e68d0eb', title: 'PATENT_TITLE_3835' },
        { id: '13613b13-61dc-4a18-bf68-dbe6eeefaa43', title: 'PATENT_TITLE_3186' },
        { id: '0c7afdd7-7d2d-4507-a4a6-b6138c6c3259', title: 'PATENT_TITLE_1517' },
        { id: '2be6b41c-7494-49c2-a4dd-6dc8b94560a1', title: 'PATENT_TITLE_2595' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App