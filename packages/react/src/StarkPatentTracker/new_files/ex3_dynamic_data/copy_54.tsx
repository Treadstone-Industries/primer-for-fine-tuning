import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '35dc4fee-e2b2-4e49-8734-d9d0cb209dea', title: 'PATENT_TITLE_4247' },
        { id: 'b19e2dfd-2ebe-43d5-bbd4-b961c4190f30', title: 'PATENT_TITLE_4251' },
        { id: '08a4d64e-864f-4308-a7b2-c56e18d2d4bd', title: 'PATENT_TITLE_9440' },
        { id: 'a26d66f0-e6e6-44cd-9928-7c28bdd5e864', title: 'PATENT_TITLE_5597' },
        { id: '083c80d1-e92b-4107-842e-85de265400ec', title: 'PATENT_TITLE_8085' },
        { id: '558a5204-f60f-4a4c-818c-8bdb748af5cd', title: 'PATENT_TITLE_8060' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App