import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'add1b34e-800b-4eea-ab9e-22cdb75a86d9', title: 'PATENT_TITLE_4392' },
        { id: '33aff0e1-95ef-4fd0-bef9-f4255d569138', title: 'PATENT_TITLE_5235' },
        { id: 'c0c8b311-7ab0-4201-85ae-7afb2a99b154', title: 'PATENT_TITLE_4110' },
        { id: 'cd08cf76-379e-429d-8de4-4e2f08f0131f', title: 'PATENT_TITLE_9745' },
        { id: '82004ef2-a43a-4f54-ba3d-3f8eee772e9b', title: 'PATENT_TITLE_4856' },
        { id: 'd0e75519-493f-4cc4-b44a-1a81d4922c0e', title: 'PATENT_TITLE_6794' },
        { id: '0c0c34c8-fce9-4f43-a00b-836f4784db77', title: 'PATENT_TITLE_5481' },
        { id: 'bbb5f59b-f25e-461f-8171-8eec588567cf', title: 'PATENT_TITLE_7578' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App