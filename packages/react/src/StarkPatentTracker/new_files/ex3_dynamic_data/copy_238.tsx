import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3423d1e8-bfe9-46b8-8217-d8bbddd38a12', title: 'PATENT_TITLE_9125' },
        { id: '10adb90b-f796-4c61-981d-f49aef5659c1', title: 'PATENT_TITLE_4634' },
        { id: '8873eac2-ff0d-4626-87a3-deafd7789607', title: 'PATENT_TITLE_5499' },
        { id: 'e3d5a262-2312-4978-ba5a-971956248160', title: 'PATENT_TITLE_6494' },
        { id: '384d4332-8394-4230-9c00-2f67e06b3ba1', title: 'PATENT_TITLE_6410' },
        { id: 'dfde1c84-3e49-445e-9fc6-e52af9ef8e09', title: 'PATENT_TITLE_7004' },
        { id: '10aeac8f-d9df-4c41-a003-29f9ad2a45c0', title: 'PATENT_TITLE_5151' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App