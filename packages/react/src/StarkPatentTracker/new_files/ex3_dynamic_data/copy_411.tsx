import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '664be69c-8384-402c-9d5e-c1bd5666a0bb', title: 'PATENT_TITLE_3848' },
        { id: '088d346a-7c21-4e6b-aa2a-a32c4fa0ab61', title: 'PATENT_TITLE_1092' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App