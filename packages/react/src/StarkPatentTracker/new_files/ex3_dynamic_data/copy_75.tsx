import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2fd681fa-feb1-4ddc-baba-03faf523dd70', title: 'PATENT_TITLE_6374' },
        { id: '0e8e6b25-a835-4ebe-b3d0-e7f4ceea3a5c', title: 'PATENT_TITLE_7761' },
        { id: 'aa9481d6-9af1-45ff-899d-65e8015ce9fd', title: 'PATENT_TITLE_6894' },
        { id: '4f29bdb7-43f4-4e54-8b97-18a83d43d30b', title: 'PATENT_TITLE_9156' },
        { id: 'c323dc39-415c-435a-b971-1fad878977b2', title: 'PATENT_TITLE_5138' },
        { id: '40cde25b-67e6-45f1-97d2-11653922486f', title: 'PATENT_TITLE_9863' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App