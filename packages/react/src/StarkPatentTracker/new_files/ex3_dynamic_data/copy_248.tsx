import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '51eec0b0-d00e-47a8-b5ef-6acdb2329f75', title: 'PATENT_TITLE_1562' },
        { id: '5ae00742-7b93-4a5f-99e5-a7191622e7a5', title: 'PATENT_TITLE_8119' },
        { id: 'c4f98263-cc25-4f6a-b03a-52cb768b71f3', title: 'PATENT_TITLE_7055' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App