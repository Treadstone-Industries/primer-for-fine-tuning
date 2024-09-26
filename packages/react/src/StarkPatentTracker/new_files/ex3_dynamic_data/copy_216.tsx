import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '698f5d44-9033-4008-b5b9-c85b12eaa0cc', title: 'PATENT_TITLE_1559' },
        { id: '823b0212-6ebd-4c03-9ba8-96bfdcc3ad68', title: 'PATENT_TITLE_7757' },
        { id: '37f8bab6-f967-477f-8cdc-3a316a89bc33', title: 'PATENT_TITLE_2790' },
        { id: '01a2a85d-8394-4a3c-83c3-7214e61aa846', title: 'PATENT_TITLE_4420' },
        { id: '01b937fc-aa66-4f97-bd61-091697f68227', title: 'PATENT_TITLE_9935' },
        { id: '57d7d5b1-0d47-47e1-b373-7d0aeda82d10', title: 'PATENT_TITLE_7185' },
        { id: 'c791835f-bb70-468f-8010-dec34ec28ec1', title: 'PATENT_TITLE_3674' },
        { id: '4532ffa7-8390-43c4-9dbf-c5bab44fae84', title: 'PATENT_TITLE_8817' },
        { id: '279e75c3-61dc-4462-8335-96f1f36afb12', title: 'PATENT_TITLE_3351' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App