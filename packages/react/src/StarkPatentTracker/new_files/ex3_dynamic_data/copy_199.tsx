import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd38c42f1-fe79-4785-b9cf-8aff57807b54', title: 'PATENT_TITLE_2973' },
        { id: '6c658357-2915-428d-98b9-747863f047de', title: 'PATENT_TITLE_6060' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App