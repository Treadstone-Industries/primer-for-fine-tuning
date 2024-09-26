import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3cbfedbd-3efb-4fef-82bb-5b6631d8230a', title: 'PATENT_TITLE_4577' },
        { id: '26e30db3-1653-4ed4-b8c9-fd96248bf4fb', title: 'PATENT_TITLE_7471' },
        { id: '968e7912-9d83-4b4b-a8b1-1e422727cac0', title: 'PATENT_TITLE_3576' },
        { id: '80b3f624-db7d-4e5a-b22d-a5a9718838b5', title: 'PATENT_TITLE_9103' },
        { id: 'cc93958c-b6fa-4f3f-b2b0-09a14c7e2a23', title: 'PATENT_TITLE_6119' },
        { id: '05c5407b-ee49-40e5-86d4-c538dd713a86', title: 'PATENT_TITLE_3492' },
        { id: '80092d40-c820-4ab1-afd0-81de7daaff36', title: 'PATENT_TITLE_9354' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App