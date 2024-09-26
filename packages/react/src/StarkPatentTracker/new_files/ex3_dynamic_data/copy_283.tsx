import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b221031f-1ea9-4936-ac29-ddc7eeec5f33', title: 'PATENT_TITLE_5358' },
        { id: 'c69836d6-db07-4aad-b6d3-61a20af4eda7', title: 'PATENT_TITLE_2954' },
        { id: 'ef90034f-3790-4b97-89b0-4cd90d507de4', title: 'PATENT_TITLE_8421' },
        { id: 'd321f8e7-e3a8-4015-af8b-316a192a6faa', title: 'PATENT_TITLE_3294' },
        { id: '888d0294-e12b-430c-b47c-588454fa177f', title: 'PATENT_TITLE_2175' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App