import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '659cdebe-4be4-4738-8743-c0e07f6b7a9a', title: 'PATENT_TITLE_6322' },
        { id: 'e83754b1-3a76-42be-b7d6-ce4d857cd073', title: 'PATENT_TITLE_1760' },
        { id: '383fda4a-4b01-4153-b670-24c0ead0979b', title: 'PATENT_TITLE_1655' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App