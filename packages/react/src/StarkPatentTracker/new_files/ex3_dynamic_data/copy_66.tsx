import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6969b4aa-264a-4fe6-9a72-7d980017f466', title: 'PATENT_TITLE_5154' },
        { id: '3d10801d-a572-415d-aa55-5ae97cb25822', title: 'PATENT_TITLE_7269' },
        { id: '070b6b5d-c576-495d-b4e6-ac7a93f6f769', title: 'PATENT_TITLE_1362' },
        { id: '7c483676-d5b0-4dfe-9d8b-4fab480c4f85', title: 'PATENT_TITLE_9039' },
        { id: '1c8095e7-d979-4f9b-9dae-72a49e9c98d1', title: 'PATENT_TITLE_7420' },
        { id: 'e6310d93-1a92-48c3-8157-dcf7c4050cea', title: 'PATENT_TITLE_7628' },
        { id: '5adec1dc-9847-46ba-9015-91ed6c28d5da', title: 'PATENT_TITLE_3149' },
        { id: 'b2041308-90c4-4ca1-90d5-4a9893cbd0ff', title: 'PATENT_TITLE_9885' },
        { id: '9c82d739-6d55-4b12-9d3c-a8b86f29b809', title: 'PATENT_TITLE_1028' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App