import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '93a55ddf-a6fd-43a9-8e3a-04ef643594ba', title: 'PATENT_TITLE_3340' },
        { id: '1e415135-6bb7-409f-bdc7-3b4a50f74d65', title: 'PATENT_TITLE_7690' },
        { id: 'caedb287-3e74-43ee-adfa-5e88dd07da68', title: 'PATENT_TITLE_8413' },
        { id: 'cabc577a-7b51-4dd9-ac2b-d2e5c65aa930', title: 'PATENT_TITLE_1611' },
        { id: '61c797dc-404d-40d2-a7a0-0c7cd8401f4d', title: 'PATENT_TITLE_6148' },
        { id: '7f4d7339-052e-4164-9811-547fb54d61fe', title: 'PATENT_TITLE_3498' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App