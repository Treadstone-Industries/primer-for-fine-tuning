import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5d81bb9f-4d12-4d7a-816f-c1023a98e1e3', title: 'PATENT_TITLE_5659' },
        { id: '2d45d704-c2d9-4b98-88a7-a62088e546b8', title: 'PATENT_TITLE_4205' },
        { id: '144d2f26-48f0-490e-aae8-accd4c991080', title: 'PATENT_TITLE_8677' },
        { id: '1cdd5e10-24b6-4f18-b4d3-0bb3d76cd077', title: 'PATENT_TITLE_5334' },
        { id: 'f56a8ba5-bd64-4805-a316-231cf41d9473', title: 'PATENT_TITLE_1974' },
        { id: 'b970d678-db1f-474b-a788-8b22ad3d8bbd', title: 'PATENT_TITLE_6017' },
        { id: '18673f4b-e669-445a-a6d4-e13e66d0bc23', title: 'PATENT_TITLE_3190' },
        { id: '7694b13a-0aa4-480b-a953-045c9b220598', title: 'PATENT_TITLE_7195' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App