import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '445f7927-41e0-475c-a8b2-3947b505dfc2', title: 'PATENT_TITLE_3079' },
        { id: '4c90d23f-2bab-46ee-9dc2-5c55ee1da54b', title: 'PATENT_TITLE_1204' },
        { id: 'b762c0fc-fddb-45d8-b5b1-7a7e72ed361b', title: 'PATENT_TITLE_5752' },
        { id: '2c91a8fd-5fb1-41a7-ad73-0dff5a3cbda5', title: 'PATENT_TITLE_5689' },
        { id: 'f2c7b22d-c265-4318-9d7f-b1bc8023d748', title: 'PATENT_TITLE_8438' },
        { id: '814208dc-a4b0-4cab-9ead-579923df0bc7', title: 'PATENT_TITLE_7050' },
        { id: '8eab000f-1934-429a-9e2c-00147e213b1d', title: 'PATENT_TITLE_8254' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App