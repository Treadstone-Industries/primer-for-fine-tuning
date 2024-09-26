import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '08719079-e335-4605-8b6b-c35c2d318e25', title: 'PATENT_TITLE_6940' },
        { id: '1f641c10-c2f3-4345-b519-1d63b8d46b1f', title: 'PATENT_TITLE_7955' },
        { id: '6c9a277c-8642-44a8-bf25-e71ed0dae6e6', title: 'PATENT_TITLE_3373' },
        { id: '6a99d1ee-22c0-4170-820e-488af75fb105', title: 'PATENT_TITLE_1405' },
        { id: 'de76591e-4315-45dd-b2d8-0db79af22e3f', title: 'PATENT_TITLE_1678' },
        { id: '7ec83469-28f8-4343-98bd-ae529754653c', title: 'PATENT_TITLE_9858' },
        { id: '2bc12665-39c9-4a27-96f7-bc69e3f8eefc', title: 'PATENT_TITLE_9916' },
        { id: 'bea53451-15cb-4121-86f9-861aed3a2833', title: 'PATENT_TITLE_5576' },
        { id: '0a97aaac-1efe-4bff-ae4e-fa9924726a39', title: 'PATENT_TITLE_3773' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App