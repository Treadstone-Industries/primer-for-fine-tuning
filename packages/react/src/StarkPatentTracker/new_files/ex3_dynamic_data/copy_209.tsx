import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '61f0470c-960c-4233-9fd8-ce821aa37411', title: 'PATENT_TITLE_8370' },
        { id: 'da116a2c-d037-4c3c-978d-14560d743577', title: 'PATENT_TITLE_1884' },
        { id: '9bd8b165-d640-4803-a7e0-3478c0a8a5f3', title: 'PATENT_TITLE_7467' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App