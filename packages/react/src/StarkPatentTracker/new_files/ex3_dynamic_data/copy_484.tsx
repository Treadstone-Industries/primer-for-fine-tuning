import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f64493bf-95db-46ac-b80d-c051cf1ea3c8', title: 'PATENT_TITLE_2961' },
        { id: '4565abfc-dc5c-4b2e-94e8-79eb46753289', title: 'PATENT_TITLE_7853' },
        { id: '538c00e5-aaf6-446d-a9f6-4abd9b0335c4', title: 'PATENT_TITLE_2147' },
        { id: '1767c383-0146-4e57-8241-a62ffd1ccb3d', title: 'PATENT_TITLE_8218' },
        { id: 'a400896f-5d61-4a38-bc72-5ad88caac89d', title: 'PATENT_TITLE_4084' },
        { id: '63d00e54-9eae-4dab-8387-86f38909b970', title: 'PATENT_TITLE_1397' },
        { id: '4da12e8a-f14c-43d8-8f35-a62d576c40a4', title: 'PATENT_TITLE_2594' },
        { id: 'a49285b4-f9fc-4bdf-8245-5ea9d3162d6f', title: 'PATENT_TITLE_9825' },
        { id: '2c07e095-4bbf-4ca1-b8ea-ca301ab12213', title: 'PATENT_TITLE_2644' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App