import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '387bf6ad-c9ba-4e69-8325-7251589c8ce5', title: 'PATENT_TITLE_3805' },
        { id: 'edc4959e-ed88-48b4-8002-40c294ba230e', title: 'PATENT_TITLE_4052' },
        { id: 'f4cbb154-2e74-4646-a86c-c1d017715950', title: 'PATENT_TITLE_8896' },
        { id: '33633baf-fe27-4784-9035-18483185ccb3', title: 'PATENT_TITLE_8634' },
        { id: 'ee2457fc-0aea-4239-8376-978957b3ca53', title: 'PATENT_TITLE_2549' },
        { id: '44de37c1-41a3-46ea-b26c-3f92a93a4fbc', title: 'PATENT_TITLE_9235' },
        { id: '964436f9-698d-4a46-87cb-d02925b25e09', title: 'PATENT_TITLE_6664' },
        { id: '97bd222e-acc7-4779-a921-dce294ca2efc', title: 'PATENT_TITLE_8739' },
        { id: 'fe7c5592-7000-45ca-ab93-60e55838681a', title: 'PATENT_TITLE_6555' },
        { id: '41123115-ab6a-4fc6-b944-7bdb129f7a6d', title: 'PATENT_TITLE_1272' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App