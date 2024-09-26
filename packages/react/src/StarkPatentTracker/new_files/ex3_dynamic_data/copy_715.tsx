import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '161c35ea-3359-437f-90d7-e9fefe14842e', title: 'PATENT_TITLE_3117' },
        { id: '45e06855-7d75-43d2-ae26-57918fce575b', title: 'PATENT_TITLE_5823' },
        { id: 'cb1798b4-d3dc-4d96-9901-23b0b6edc818', title: 'PATENT_TITLE_3383' },
        { id: 'b8221657-07ab-4cc0-a23e-64748042a9a3', title: 'PATENT_TITLE_2026' },
        { id: '52182be2-6f03-49dd-9379-05ee0fc8ef06', title: 'PATENT_TITLE_8675' },
        { id: 'a7ba5caa-513c-47d1-8e63-f7883b164e80', title: 'PATENT_TITLE_9150' },
        { id: 'ac0100b2-55bc-49e3-85b6-4946c74b36b4', title: 'PATENT_TITLE_5851' },
        { id: '50bd033b-3d15-4ca0-aa96-6e36ec190612', title: 'PATENT_TITLE_7180' },
        { id: '93c01c9c-b208-4d3d-a05d-8d65e30db9f3', title: 'PATENT_TITLE_2968' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App