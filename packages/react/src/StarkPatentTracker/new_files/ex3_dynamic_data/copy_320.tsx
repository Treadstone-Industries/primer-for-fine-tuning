import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '95020614-f224-4cf6-9928-65dae78ef0f7', title: 'PATENT_TITLE_3439' },
        { id: 'b65f096a-331f-4b2a-b002-c6e798bb5f23', title: 'PATENT_TITLE_5779' },
        { id: 'a20fd493-74e5-445f-b9d1-2d358d96284a', title: 'PATENT_TITLE_1605' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App