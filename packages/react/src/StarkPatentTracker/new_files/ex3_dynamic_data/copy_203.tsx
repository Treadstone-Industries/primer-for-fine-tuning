import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9501fd7d-0f0a-4a36-a732-c5d6aa364db7', title: 'PATENT_TITLE_7701' },
        { id: 'd4381a7f-7f38-4d32-a239-4a706520fbaf', title: 'PATENT_TITLE_8686' },
        { id: '8dcb5dd7-1782-449f-a7ad-dc755862402d', title: 'PATENT_TITLE_5620' },
        { id: 'ac6388ce-2be4-4c72-9feb-a79a4b8abfd8', title: 'PATENT_TITLE_1660' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App