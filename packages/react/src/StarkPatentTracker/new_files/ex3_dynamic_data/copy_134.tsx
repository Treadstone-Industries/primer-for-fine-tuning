import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '914f2ca4-9ac8-4d6f-a54a-12ff39736f6d', title: 'PATENT_TITLE_4367' },
        { id: '81ceb901-abfd-4aa9-922b-136a02926b8f', title: 'PATENT_TITLE_9823' },
        { id: '05344d8e-5f2a-4a43-be52-a30eadc12d93', title: 'PATENT_TITLE_8632' },
        { id: '6a1600b4-a456-4193-a9fd-472d2f4d59bf', title: 'PATENT_TITLE_7102' },
        { id: '720b63fe-c793-42d6-ad32-bb13f375554b', title: 'PATENT_TITLE_1415' },
        { id: '62ca0f9f-d7b3-4737-9143-b43d3818722d', title: 'PATENT_TITLE_3552' },
        { id: 'a0aaef8e-3621-439e-8edd-36dbc2ec2605', title: 'PATENT_TITLE_5151' },
        { id: '7dff16b4-c906-42e2-9195-8dfe3865ff02', title: 'PATENT_TITLE_2882' },
        { id: '7247be3c-89b5-4fd9-9a53-3b6f2e9ccf06', title: 'PATENT_TITLE_7911' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App