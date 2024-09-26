import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e21d8c04-4309-4ee3-b224-d62cb8bef344', title: 'PATENT_TITLE_9400' },
        { id: 'ba91efd4-78b6-462a-b141-586475c37729', title: 'PATENT_TITLE_6990' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App