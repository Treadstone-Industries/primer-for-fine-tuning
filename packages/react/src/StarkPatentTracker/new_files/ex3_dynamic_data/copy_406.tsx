import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bb355bc1-7bb0-4922-bd93-e66a1b798df2', title: 'PATENT_TITLE_2686' },
        { id: '91927cfb-d31d-4195-8cbf-3b7f675aca14', title: 'PATENT_TITLE_3339' },
        { id: '3e999fcb-97de-4509-b052-f23ea6b084ea', title: 'PATENT_TITLE_8641' },
        { id: '8bb63d0c-0aae-4b9b-a1cb-c0fcc4dc14a9', title: 'PATENT_TITLE_2062' },
        { id: 'b154f5db-e8db-4ce8-af22-d66f05d57204', title: 'PATENT_TITLE_7842' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App