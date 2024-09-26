import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3221b57a-47a3-47f2-99d4-d1d7f980d39f', title: 'PATENT_TITLE_1685' },
        { id: '61074490-428f-4321-8304-978262f8b445', title: 'PATENT_TITLE_4191' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App