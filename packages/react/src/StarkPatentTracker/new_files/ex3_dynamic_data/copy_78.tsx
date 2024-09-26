import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '38c143fe-a062-4bb1-8526-c9f88bbff73a', title: 'PATENT_TITLE_5384' },
        { id: '12b7dd63-b2d0-454b-ade5-caf346ecb9f1', title: 'PATENT_TITLE_8445' },
        { id: 'cdd8bf27-b484-4f15-8044-3d12a7af48c5', title: 'PATENT_TITLE_2777' },
        { id: 'c4d3c26f-ed47-4c9e-bd0d-2fdcdecabc06', title: 'PATENT_TITLE_4181' },
        { id: '189cc3e8-9527-4771-8489-9c1b732cf7c7', title: 'PATENT_TITLE_3047' },
        { id: '7e0ebcd6-1486-452f-a580-da27f25bf5f0', title: 'PATENT_TITLE_8856' },
        { id: '6d3bcb85-3524-4310-9998-7089574843a6', title: 'PATENT_TITLE_2183' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App