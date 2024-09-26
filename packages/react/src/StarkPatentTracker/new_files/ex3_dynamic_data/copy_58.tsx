import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e96b8ba2-51e3-4d88-bafe-97ec9c3a9cb2', title: 'PATENT_TITLE_7207' },
        { id: '81e09990-098b-4dac-bca8-cc6236a6028f', title: 'PATENT_TITLE_8733' },
        { id: '08232855-fcd6-4d9e-855b-89461ae04491', title: 'PATENT_TITLE_4783' },
        { id: '316725a7-ea97-40ce-98f6-54b20b3b9521', title: 'PATENT_TITLE_9189' },
        { id: '38d50006-30a5-49a5-8be2-1e9ad28d9cfb', title: 'PATENT_TITLE_7428' },
        { id: 'bd3cd66c-86df-42bd-8257-fd55741feb21', title: 'PATENT_TITLE_4228' },
        { id: '97d68b61-b3dd-477e-9128-987d972b69ba', title: 'PATENT_TITLE_3903' },
        { id: '7b796a61-e1ac-450e-8e41-1355d58fc5d4', title: 'PATENT_TITLE_4777' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App