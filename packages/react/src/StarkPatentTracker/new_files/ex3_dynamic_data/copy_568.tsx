import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6b6383f1-fa9a-4eac-8354-6480d0bdda2e', title: 'PATENT_TITLE_6498' },
        { id: '0ead2cbf-2935-4fd6-9fb7-a2332bec2071', title: 'PATENT_TITLE_1900' },
        { id: '6f9b9b91-4a84-4683-9a0f-f677c86eddb7', title: 'PATENT_TITLE_5296' },
        { id: '86148e5f-f7ce-4cf5-9a64-2658ea43567f', title: 'PATENT_TITLE_2901' },
        { id: '2e3cfc64-fb90-4afd-9ad1-39c7f008fab7', title: 'PATENT_TITLE_6524' },
        { id: 'aa841cb1-d685-4eff-b183-33551da62eb3', title: 'PATENT_TITLE_4458' },
        { id: '636e9221-6867-4979-87ae-573c87480fe8', title: 'PATENT_TITLE_6421' },
        { id: '48c32c22-4dc1-4864-a116-72fc06624d70', title: 'PATENT_TITLE_6384' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App