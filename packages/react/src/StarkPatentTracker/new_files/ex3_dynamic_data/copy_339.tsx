import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0efb7fdb-57fa-4e10-afd2-28c573ade4cb', title: 'PATENT_TITLE_5802' },
        { id: 'ca14efb3-cc06-4c6d-a807-da5a435e20c7', title: 'PATENT_TITLE_1702' },
        { id: '143f50a7-d3d8-45c2-b1f9-bcf02c62ab4f', title: 'PATENT_TITLE_7664' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App