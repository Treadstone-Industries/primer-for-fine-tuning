import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '760ef335-cf0d-4f98-a42d-bf97cc1b0d78', title: 'PATENT_TITLE_9206' },
        { id: '16ec6ad9-a6da-40d8-8fa9-1fda5f387304', title: 'PATENT_TITLE_2547' },
        { id: '01e69e51-172a-403d-86a7-e95e22979840', title: 'PATENT_TITLE_8839' },
        { id: 'c8707bda-3a11-4538-bd2c-b441e9bf84ff', title: 'PATENT_TITLE_6264' },
        { id: 'b8795b5c-6fbd-42f1-8317-e78e0a2e4cdf', title: 'PATENT_TITLE_8113' },
        { id: '8849fb33-e46c-479d-90e5-70ae617ff316', title: 'PATENT_TITLE_2951' },
        { id: 'ac96b7e1-3ff7-4119-8488-7588d5923b5c', title: 'PATENT_TITLE_6153' },
        { id: '320892aa-0189-4647-90b5-6312bd96f262', title: 'PATENT_TITLE_3659' },
        { id: '6e52736e-ff56-4a13-b03e-1f954fd66fc7', title: 'PATENT_TITLE_4395' },
        { id: '74ded138-c841-42f5-9dc8-b14391ea9e89', title: 'PATENT_TITLE_6113' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App