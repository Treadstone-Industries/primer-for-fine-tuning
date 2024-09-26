import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '75a773d5-256f-4a3e-9cd4-d25680f400aa', title: 'PATENT_TITLE_5656' },
        { id: 'e320baba-1d3d-4da1-b85e-975152b8b8ee', title: 'PATENT_TITLE_4850' },
        { id: '067934f8-b2e1-4791-94c3-46439d5d54cf', title: 'PATENT_TITLE_9818' },
        { id: 'd6743a47-de7f-4f21-b659-4d9d2eab0dcc', title: 'PATENT_TITLE_6619' },
        { id: 'b8854be6-be28-4ebd-b22e-7f133f0f90e8', title: 'PATENT_TITLE_7437' },
        { id: '6231d4cd-b9d9-4790-9787-3e8b0c30013f', title: 'PATENT_TITLE_8589' },
        { id: '676bd779-b4cf-4117-9aae-bb9377e7b1b5', title: 'PATENT_TITLE_1106' },
        { id: 'de2e43d2-51f0-4276-8478-79961f813713', title: 'PATENT_TITLE_2487' },
        { id: '88a79760-a345-4cfd-a4e6-a4ee9b3e377b', title: 'PATENT_TITLE_1112' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App