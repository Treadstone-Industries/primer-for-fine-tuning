import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e0cfaa42-c407-47a2-ae2f-17e2d355c413', title: 'PATENT_TITLE_2288' },
        { id: '15653f13-ff8b-4533-8d88-e9767a39b73a', title: 'PATENT_TITLE_7981' },
        { id: 'fcf55de1-7397-45a0-bb23-503e08b33797', title: 'PATENT_TITLE_3142' },
        { id: 'd79e00b1-12d8-4cfe-af34-ba2c3ffd99c4', title: 'PATENT_TITLE_9305' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App