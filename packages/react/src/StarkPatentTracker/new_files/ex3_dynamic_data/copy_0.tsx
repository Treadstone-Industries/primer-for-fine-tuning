import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cd472131-c5c1-4ad0-9894-474e2f916620', title: 'PATENT_TITLE_2839' },
        { id: '58646905-d4d8-410e-ae5a-6b6fdbb7e1ba', title: 'PATENT_TITLE_9455' },
        { id: '6f7f6b49-2da0-4a86-a43f-592c2d2c1720', title: 'PATENT_TITLE_9985' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App