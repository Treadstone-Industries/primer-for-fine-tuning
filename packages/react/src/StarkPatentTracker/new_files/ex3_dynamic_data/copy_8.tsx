import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2928bb1a-8863-4bca-8d49-c6c92a3f0c72', title: 'PATENT_TITLE_3015' },
        { id: '302e6dd0-8c58-45d5-8bd4-57d73a127a30', title: 'PATENT_TITLE_1992' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App