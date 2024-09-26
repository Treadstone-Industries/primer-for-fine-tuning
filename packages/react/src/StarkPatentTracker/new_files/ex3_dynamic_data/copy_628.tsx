import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bc0cf9bd-3b69-4a82-8cd7-faeb6c6d9a3a', title: 'PATENT_TITLE_6630' },
        { id: '86313e94-e5de-40b2-b19e-4e2176827274', title: 'PATENT_TITLE_6624' },
        { id: '3231bce0-045f-4995-86aa-9cfc2f53226a', title: 'PATENT_TITLE_1409' },
        { id: 'd5cc1de6-c57e-4479-a5e9-b363f85c90b9', title: 'PATENT_TITLE_7457' },
        { id: '6c460991-563f-475b-9943-82cab606678d', title: 'PATENT_TITLE_1014' },
        { id: '3e6b6848-321c-4755-b40c-131f941eb572', title: 'PATENT_TITLE_1222' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App