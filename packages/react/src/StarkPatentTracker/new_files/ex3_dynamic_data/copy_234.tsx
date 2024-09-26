import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8e5656b5-2fd6-4a28-bb02-04c2cb5998de', title: 'PATENT_TITLE_8495' },
        { id: '989fdf32-1b14-4319-abd7-4217aa0424a0', title: 'PATENT_TITLE_1566' },
        { id: '8aa0e21f-e67c-41a3-9507-08f0dbf0e223', title: 'PATENT_TITLE_3790' },
        { id: '5fe4abae-7040-4c12-ae92-ac0696faa94e', title: 'PATENT_TITLE_4564' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App