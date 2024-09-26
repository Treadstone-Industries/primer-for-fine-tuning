import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aebb5ee8-be02-45d2-8609-b0f5e25b1a76', title: 'PATENT_TITLE_2696' },
        { id: '8d17c697-1598-4123-9864-0b1e7233b752', title: 'PATENT_TITLE_7871' },
        { id: 'bbd0803a-4c66-4f7c-9720-215d795044c9', title: 'PATENT_TITLE_2951' },
        { id: 'a26fd356-0ebe-43ea-aed7-3da7f43cc021', title: 'PATENT_TITLE_3596' },
        { id: '3eca3626-6282-440b-867d-89789ca64ffd', title: 'PATENT_TITLE_5308' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App