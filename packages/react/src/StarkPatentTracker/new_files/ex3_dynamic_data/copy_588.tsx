import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '79ebafc5-5e17-4665-96e4-eeb9f65b16aa', title: 'PATENT_TITLE_2210' },
        { id: '7393fa9e-8121-472f-be26-d3a242341041', title: 'PATENT_TITLE_4758' },
        { id: '018c424a-1321-4e08-aba6-74d55f721d09', title: 'PATENT_TITLE_2454' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App