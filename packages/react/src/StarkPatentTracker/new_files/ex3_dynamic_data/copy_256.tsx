import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '979be04a-d9f4-4c06-93cb-8c25d9ae26ea', title: 'PATENT_TITLE_8931' },
        { id: 'ce63334d-33a4-40ae-b3e7-f17864463bb1', title: 'PATENT_TITLE_4429' },
        { id: '2bcf39de-c640-4b6f-9987-89957e32ff83', title: 'PATENT_TITLE_8784' },
        { id: '1d0f88f9-be96-499f-8acb-f48859dfcd4c', title: 'PATENT_TITLE_2158' },
        { id: '161f647b-7b8c-4d1d-b23e-091270c683ac', title: 'PATENT_TITLE_8542' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App