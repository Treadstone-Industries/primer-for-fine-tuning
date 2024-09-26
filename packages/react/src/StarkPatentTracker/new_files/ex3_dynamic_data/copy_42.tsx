import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2cc8fb3d-4187-41fa-ba69-01ebfc1964b1', title: 'PATENT_TITLE_1951' },
        { id: '85c25051-bf0a-444e-bb5e-08d6d0d57c18', title: 'PATENT_TITLE_8985' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App