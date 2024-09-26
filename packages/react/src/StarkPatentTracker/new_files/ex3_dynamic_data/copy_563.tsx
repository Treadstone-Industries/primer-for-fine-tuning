import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '55ff3a0d-f9a1-4491-9ad7-868c40f52030', title: 'PATENT_TITLE_6249' },
        { id: '684c08ed-7ca5-4ad7-a9b8-6cfa74e295d0', title: 'PATENT_TITLE_8653' },
        { id: '960f9d89-15fd-49d7-90ca-4c9ad86de38b', title: 'PATENT_TITLE_2243' },
        { id: 'ef5f7eab-14d0-4604-a278-cdfb668b3083', title: 'PATENT_TITLE_8995' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App