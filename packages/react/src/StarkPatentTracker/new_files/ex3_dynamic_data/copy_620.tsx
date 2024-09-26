import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b586dc56-d35e-4b1a-bffd-ab786d028faa', title: 'PATENT_TITLE_7259' },
        { id: 'd12329b7-0910-42d3-b66b-374d86da117f', title: 'PATENT_TITLE_4575' },
        { id: '02a4cbc3-67a9-4d9c-8d96-737bc6e31055', title: 'PATENT_TITLE_8129' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App