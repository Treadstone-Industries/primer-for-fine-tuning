import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '819f85f7-96ef-4f16-84a7-9c05788ad9f9', title: 'PATENT_TITLE_6095' },
        { id: 'bd4af353-f31d-406b-a291-f6e49098b5e3', title: 'PATENT_TITLE_5113' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App