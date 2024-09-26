import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c9fdc2b3-3723-4014-a40b-0905de1f0db9', title: 'PATENT_TITLE_3417' },
        { id: '665fe498-0a5f-4ee9-83e1-af8d0358ed13', title: 'PATENT_TITLE_7611' },
        { id: 'e0556327-9ebd-428e-8ea9-b9ee1467e832', title: 'PATENT_TITLE_5037' },
        { id: 'bb2fcc28-999a-4c5d-92f6-c5ac44db84c1', title: 'PATENT_TITLE_7688' },
        { id: '31709d26-2ec3-4f48-97c5-3177d0529abe', title: 'PATENT_TITLE_9054' },
        { id: '0622f86d-15cd-4d08-8d1d-8ae0ed14f99f', title: 'PATENT_TITLE_1727' },
        { id: '1ca6875d-b5f3-44e7-8730-10d4d2db56f0', title: 'PATENT_TITLE_6141' },
        { id: '6b5d00c2-8e1b-44f5-afe3-91a4a25db6c1', title: 'PATENT_TITLE_2200' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App