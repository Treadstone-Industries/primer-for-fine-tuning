import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '80c6d85f-a562-4942-b727-2f165a763e71', title: 'PATENT_TITLE_6296' },
        { id: '5bc6c22c-81f7-4304-9087-4279200172ac', title: 'PATENT_TITLE_8148' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App