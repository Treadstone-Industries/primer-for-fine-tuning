import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6818eb9f-1cfd-4dcc-a13b-a6fcc406b6b9', title: 'PATENT_TITLE_4343' },
        { id: 'dab4c225-dfa9-42c1-a0ac-eca70912f568', title: 'PATENT_TITLE_9270' },
        { id: '334739f6-d1cf-4341-9211-0f8c26cb21ae', title: 'PATENT_TITLE_3310' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App