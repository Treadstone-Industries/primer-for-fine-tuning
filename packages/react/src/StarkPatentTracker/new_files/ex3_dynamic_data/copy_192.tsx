import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'b250d9b5-0a8d-4b02-9fae-600d9137579f', title: 'PATENT_TITLE_3109' },
        { id: '6db4076f-2f06-48e2-a966-35cf8e0f528a', title: 'PATENT_TITLE_2880' },
        { id: '8713976d-b613-4e3f-a644-4f3c7d343c38', title: 'PATENT_TITLE_6934' },
        { id: '07233247-d19e-42bb-9ff0-9ed64a0bc86a', title: 'PATENT_TITLE_8904' },
        { id: 'b94ce3b0-0e16-4a08-a9c8-48cfce645301', title: 'PATENT_TITLE_3906' },
        { id: '9c2f7738-3b2c-4ca6-a849-be94f421a5b5', title: 'PATENT_TITLE_8249' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App