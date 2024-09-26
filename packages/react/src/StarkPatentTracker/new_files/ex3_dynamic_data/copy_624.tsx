import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3446fb89-feac-4b96-8e4e-faa8c309a741', title: 'PATENT_TITLE_1753' },
        { id: '87e22cf7-7ba8-4268-a3af-9d96ba38ca95', title: 'PATENT_TITLE_7531' },
        { id: '8f458f5d-9b13-4ba5-8d08-0153e511925f', title: 'PATENT_TITLE_5412' },
        { id: 'ee2f69d5-b89e-4210-bd2e-7d3cacc34809', title: 'PATENT_TITLE_6989' },
        { id: '61d2f7ca-e05e-4099-a86b-f034e2e7ae43', title: 'PATENT_TITLE_3176' },
        { id: '9cf9fb38-baef-4954-80f5-3de02d32c002', title: 'PATENT_TITLE_7555' },
        { id: '7b8c0fcc-58a9-4d10-96de-3c157bfaf321', title: 'PATENT_TITLE_3563' },
        { id: 'c74a9862-ff00-4467-a577-441a5e654508', title: 'PATENT_TITLE_3357' },
        { id: '1535e282-e7de-45d0-a8a8-7efdd6cc3b9b', title: 'PATENT_TITLE_7917' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App