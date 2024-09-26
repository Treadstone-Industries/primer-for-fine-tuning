import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aca3f088-4a47-4a65-9313-7b28c291ac22', title: 'PATENT_TITLE_2360' },
        { id: '007b85e9-528f-44ae-81f1-456d4ac6d883', title: 'PATENT_TITLE_6379' },
        { id: '767ee5b0-3ae9-4677-a116-b5173ef5f849', title: 'PATENT_TITLE_5323' },
        { id: '744f0146-014c-4082-9f47-b39144df4836', title: 'PATENT_TITLE_4848' },
        { id: '05185102-d994-4117-9c46-79b11da61d75', title: 'PATENT_TITLE_9954' },
        { id: '3368ab34-1a3d-4628-b2d5-cde8156ba340', title: 'PATENT_TITLE_5797' },
        { id: 'c62c32f8-be15-47d5-9f4c-eb6270235e15', title: 'PATENT_TITLE_4513' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App