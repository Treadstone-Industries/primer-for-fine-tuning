import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ea65a6ba-1f6d-4b71-a5ec-eac40a14e236', title: 'PATENT_TITLE_7643' },
        { id: '21ed854c-bef8-4292-8772-ecc67d1c011f', title: 'PATENT_TITLE_5867' },
        { id: '7fad7c17-efb5-4e46-8381-0d34e4c3c289', title: 'PATENT_TITLE_7026' },
        { id: '55050cd3-6e0b-4ce6-bc16-d76551bd7584', title: 'PATENT_TITLE_9787' },
        { id: 'ddba41c4-2267-4194-b23a-1acc2571f6e4', title: 'PATENT_TITLE_8363' },
        { id: 'f0d26003-7adf-434f-b98e-9dd489d0dbbf', title: 'PATENT_TITLE_6795' },
        { id: '563fdadb-783f-4ae9-85c2-eeb66aa4eb2c', title: 'PATENT_TITLE_9109' },
        { id: '352d4f22-2a0f-4dea-9842-00b58bab7725', title: 'PATENT_TITLE_1112' },
        { id: 'e7bf39b0-c85d-4849-a912-8cdaa92a2e3c', title: 'PATENT_TITLE_5773' },
        { id: '1551f2cc-c293-429f-8861-a351ecd86a72', title: 'PATENT_TITLE_4358' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App