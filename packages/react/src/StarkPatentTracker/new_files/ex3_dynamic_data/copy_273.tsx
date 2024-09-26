import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3b4f36c6-7704-4278-a24d-f7624f95deee', title: 'PATENT_TITLE_7320' },
        { id: '2751da7b-bf0e-491d-9a13-285791eeaaed', title: 'PATENT_TITLE_6378' },
        { id: '4c2e11dd-36ed-400d-a224-a3fda9213b7c', title: 'PATENT_TITLE_9757' },
        { id: '7b1cd362-8e74-42b4-9c8c-e8737e83da17', title: 'PATENT_TITLE_8397' },
        { id: '97b8ccc8-577a-43d2-8f3f-e007e5951b79', title: 'PATENT_TITLE_4121' },
        { id: '36d7a580-d63f-4b66-ba52-87ffbc95918d', title: 'PATENT_TITLE_4517' },
        { id: 'f76f6922-cb45-4657-be36-7ff00cc96119', title: 'PATENT_TITLE_7631' },
        { id: '52b9e327-41f8-4fc8-b307-52f6d82fd651', title: 'PATENT_TITLE_4585' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App