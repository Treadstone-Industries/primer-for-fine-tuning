import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cc02278a-0bb1-41fb-8626-1e9619dd383a', title: 'PATENT_TITLE_8875' },
        { id: 'ac457b99-5e96-464a-ab58-6bf93228db05', title: 'PATENT_TITLE_5242' },
        { id: 'b8b8d6b6-bfc8-40f8-a7c1-91c4d1d2915e', title: 'PATENT_TITLE_8794' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App