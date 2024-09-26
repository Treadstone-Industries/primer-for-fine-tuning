import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6879da80-80a7-4e1b-90d1-82a5ad90c6c9', title: 'PATENT_TITLE_5128' },
        { id: '535afe62-b27c-4111-8747-824dada91b02', title: 'PATENT_TITLE_6646' },
        { id: 'e5d57997-5186-4354-9f34-6bb0c2f04eee', title: 'PATENT_TITLE_5466' },
        { id: '876114bf-0df4-463b-b64e-0d6e6543aa2b', title: 'PATENT_TITLE_5749' },
        { id: '1d7f52be-647c-4ce4-9528-6d61581bc550', title: 'PATENT_TITLE_3073' },
        { id: 'f5c2f166-5594-4b11-a745-0e2815cd4d68', title: 'PATENT_TITLE_2206' },
        { id: '6536398c-677e-43fa-a3fa-0db7f5ebb3e3', title: 'PATENT_TITLE_6316' },
        { id: 'd7dc1132-8af1-4493-9a89-1f47dddb1bbc', title: 'PATENT_TITLE_8513' },
        { id: 'bfe02512-f2d7-4b01-86a2-357740549d0b', title: 'PATENT_TITLE_9464' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App