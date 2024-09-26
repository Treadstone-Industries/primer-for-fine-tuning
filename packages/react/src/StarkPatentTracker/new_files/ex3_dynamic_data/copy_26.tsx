import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a6dbeadf-4aed-4e64-b040-c7bb701af11c', title: 'PATENT_TITLE_6856' },
        { id: '8ceab1cc-a994-4d3f-b358-580efc9fa0dd', title: 'PATENT_TITLE_9287' },
        { id: '4210988d-fa75-49fe-b960-324700927988', title: 'PATENT_TITLE_8248' },
        { id: '051084a3-9132-4cc1-8bd0-19a92b1be7d0', title: 'PATENT_TITLE_4613' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App