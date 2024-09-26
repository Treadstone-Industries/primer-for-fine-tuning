import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd391bd37-fdab-4372-968b-bffa3826dfef', title: 'PATENT_TITLE_3924' },
        { id: 'd67fcea2-d752-46f9-b768-740cb3ffc436', title: 'PATENT_TITLE_4913' },
        { id: 'f0fb0523-c838-48e4-8d22-447d4ccd38c7', title: 'PATENT_TITLE_3969' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App