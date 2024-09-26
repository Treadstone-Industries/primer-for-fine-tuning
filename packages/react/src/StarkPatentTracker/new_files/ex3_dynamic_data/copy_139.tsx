import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2bc984c8-b4b2-429f-8cc1-1312516b0b99', title: 'PATENT_TITLE_6579' },
        { id: '3b677037-880c-4858-ab78-63f4f9da0ead', title: 'PATENT_TITLE_7512' },
        { id: 'a4e098d1-756d-47d1-a53c-41fbdbb343e1', title: 'PATENT_TITLE_3535' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App