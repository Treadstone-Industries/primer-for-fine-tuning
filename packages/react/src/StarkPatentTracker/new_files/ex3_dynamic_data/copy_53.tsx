import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f2d7b11c-f904-423a-bc2a-c50d324ae22d', title: 'PATENT_TITLE_4178' },
        { id: 'ed30e9f5-0450-4b40-8c0d-59146d6e290d', title: 'PATENT_TITLE_7766' },
        { id: '4b4ee312-4a4d-432f-a5a4-b9ca8e439db2', title: 'PATENT_TITLE_7640' },
        { id: 'd8381065-65db-466f-bb9e-6ebe0c52a4ac', title: 'PATENT_TITLE_6502' },
        { id: '80d8648a-59c7-4f78-9afc-412e7b632b09', title: 'PATENT_TITLE_1874' },
        { id: 'a513b683-cb57-4c3f-9af3-c8c2c0f89549', title: 'PATENT_TITLE_9774' },
        { id: 'f45f7941-8b25-4858-9501-ff51cec20a3c', title: 'PATENT_TITLE_9254' },
        { id: 'a0a4b9ad-8df1-40d9-84e7-386e1a50acfd', title: 'PATENT_TITLE_9190' },
        { id: '590467a6-00bc-4609-b5b7-7413202639a4', title: 'PATENT_TITLE_5598' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App