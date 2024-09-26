import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd0e7c7f2-a4d8-43ca-b9f8-c7892a89f83e', title: 'PATENT_TITLE_2716' },
        { id: 'cc27bb0f-9f91-4a21-9735-2ba81a227509', title: 'PATENT_TITLE_8850' },
        { id: 'd0042268-4ea5-4be2-9119-e6807f673140', title: 'PATENT_TITLE_2882' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App