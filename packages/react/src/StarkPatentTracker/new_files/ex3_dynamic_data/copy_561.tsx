import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6eb4b619-8557-4b3f-98ef-4b1e58ee0f6f', title: 'PATENT_TITLE_1125' },
        { id: 'e8dd2b13-f29e-434d-9c12-c8c5adc60a91', title: 'PATENT_TITLE_6134' },
        { id: '46694065-7976-4b9b-afcb-1cc113a9ba25', title: 'PATENT_TITLE_2679' },
        { id: 'bed2e177-2ef8-4b15-b0c4-854f39990894', title: 'PATENT_TITLE_8017' },
        { id: 'adc34b1d-ed64-4044-9e69-9542cb705a12', title: 'PATENT_TITLE_2313' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App