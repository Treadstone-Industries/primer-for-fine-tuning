import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aab722d4-5cca-4a33-a9e4-49cdee88873c', title: 'PATENT_TITLE_5447' },
        { id: '9043bc10-8433-485e-b206-ad7095dd060f', title: 'PATENT_TITLE_1876' },
        { id: '4376c0f4-d65d-46bc-ad01-8697e7d3fc05', title: 'PATENT_TITLE_4156' },
        { id: 'b1f64b5e-7905-4d91-86c1-e69430d4290d', title: 'PATENT_TITLE_6373' },
        { id: '6b33f3ee-96da-43c9-bf5d-fed69aec3b86', title: 'PATENT_TITLE_4449' },
        { id: '1e456d34-9422-42a2-bdc9-c841bcea5ef6', title: 'PATENT_TITLE_8491' },
        { id: 'c077c1b1-c83d-4d74-87a8-341d231bf76f', title: 'PATENT_TITLE_8736' },
        { id: '84e82958-e093-49af-9285-6089c55430b4', title: 'PATENT_TITLE_4082' },
        { id: '6aacf93f-b2f6-47da-94ef-ca1db85b3653', title: 'PATENT_TITLE_5762' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App