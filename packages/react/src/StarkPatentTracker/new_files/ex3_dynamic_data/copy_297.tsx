import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fffab0b9-6596-4457-b6ff-f24477fb2c59', title: 'PATENT_TITLE_5614' },
        { id: 'fb967025-da24-4164-b407-63c7880e3a4a', title: 'PATENT_TITLE_4804' },
        { id: 'e0a822b8-0744-4691-b09a-75d4834219dc', title: 'PATENT_TITLE_9540' },
        { id: '4596831d-81b0-419b-ab50-d58d4678aa33', title: 'PATENT_TITLE_8286' },
        { id: '6932cc09-91a2-44a8-945e-4154d768d92c', title: 'PATENT_TITLE_9640' },
        { id: '5ffbcd81-3cda-4af7-88a0-00d079396c3f', title: 'PATENT_TITLE_7376' },
        { id: '34210f9b-d6cb-4ebb-9d97-bf391c23a75c', title: 'PATENT_TITLE_9626' },
        { id: '0abee392-e307-4cad-a532-7f794f119174', title: 'PATENT_TITLE_3319' },
        { id: '02449ae3-01a8-4b64-99ab-09b9cb82dc2c', title: 'PATENT_TITLE_3571' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App