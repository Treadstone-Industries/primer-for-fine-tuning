import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '468ea91e-966f-45c3-8fb3-ba42c56c7834', title: 'PATENT_TITLE_7794' },
        { id: '78a49f62-6d1d-495c-825c-3924334ec830', title: 'PATENT_TITLE_9936' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App