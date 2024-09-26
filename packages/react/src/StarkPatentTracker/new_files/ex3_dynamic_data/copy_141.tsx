import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6de45346-88dd-4e7d-8187-2115b990f768', title: 'PATENT_TITLE_1678' },
        { id: '2d33196b-2669-436e-9a84-d6858a32a427', title: 'PATENT_TITLE_6863' },
        { id: 'bba75482-6d79-46cf-ad77-9d8b1d8a5f1d', title: 'PATENT_TITLE_7484' },
        { id: 'bd7891d8-dc69-4302-95ad-ae250e137a7f', title: 'PATENT_TITLE_1704' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App