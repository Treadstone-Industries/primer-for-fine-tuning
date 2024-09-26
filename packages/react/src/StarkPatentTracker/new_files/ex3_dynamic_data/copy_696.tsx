import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd6bd0893-cccc-4064-8627-5aed32115380', title: 'PATENT_TITLE_8155' },
        { id: 'dcb70f7f-2ade-4ac8-8239-ea0b8a50d00e', title: 'PATENT_TITLE_5674' },
        { id: '3ac51668-8717-49d1-af4d-a66efb9b3adf', title: 'PATENT_TITLE_5404' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App