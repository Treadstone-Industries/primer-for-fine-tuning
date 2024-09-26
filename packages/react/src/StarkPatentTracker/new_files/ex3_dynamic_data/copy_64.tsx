import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ee5faa1c-8ee5-4113-b390-9fcb3fb1cc49', title: 'PATENT_TITLE_4290' },
        { id: 'ed1b1db6-ffa6-403b-b6df-de0fbfa98ad8', title: 'PATENT_TITLE_1422' },
        { id: '33e36040-14bf-4dd8-ab2f-7b499df7b3ba', title: 'PATENT_TITLE_2893' },
        { id: '5f20f4d3-44d9-4e69-b47e-d2ca5bf24a2c', title: 'PATENT_TITLE_5170' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App