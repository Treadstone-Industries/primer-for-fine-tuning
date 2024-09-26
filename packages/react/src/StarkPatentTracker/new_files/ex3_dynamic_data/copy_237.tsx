import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6408dba9-465a-4c06-ae4b-3e3e948ac01a', title: 'PATENT_TITLE_6799' },
        { id: 'af9695d2-dc3a-4f26-aa67-6038c6bc587f', title: 'PATENT_TITLE_4890' },
        { id: 'a60b375d-e3d1-4840-b4c0-62488d376e56', title: 'PATENT_TITLE_1653' },
        { id: 'fe4649d5-85fe-4af8-a416-199f0a349541', title: 'PATENT_TITLE_4919' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App