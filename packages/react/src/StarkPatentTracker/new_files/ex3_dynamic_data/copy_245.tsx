import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '61613a47-82fb-4aec-b815-130762c8fe8c', title: 'PATENT_TITLE_2141' },
        { id: '752a8652-29c0-44da-9c88-5ce5b458c71f', title: 'PATENT_TITLE_6242' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App