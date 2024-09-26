import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '437cc98a-ea43-4996-95f3-5ccf6d407a66', title: 'PATENT_TITLE_5766' },
        { id: '9752a611-26ef-48b2-8453-1d24198a011d', title: 'PATENT_TITLE_4652' },
        { id: 'd0702ba6-27c1-41a6-af06-b3308530af31', title: 'PATENT_TITLE_6498' },
        { id: 'a4d2d98e-2fcf-4d02-80c9-750d6d7ab995', title: 'PATENT_TITLE_5388' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App