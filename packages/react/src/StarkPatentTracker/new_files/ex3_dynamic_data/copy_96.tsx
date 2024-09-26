import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'af1f0382-c158-4549-80b3-8d2df5e46b98', title: 'PATENT_TITLE_4413' },
        { id: '55c0a4a8-6f4f-44f7-afed-12d6e350cd01', title: 'PATENT_TITLE_2283' },
        { id: '3ae6b223-cc66-4fc8-8d6f-b318cb40705d', title: 'PATENT_TITLE_2312' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App