import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a523cdca-4797-40dc-827f-e5164a1b562d', title: 'PATENT_TITLE_1316' },
        { id: '5159cec0-ff42-4ae0-88b4-96a49f1e3d64', title: 'PATENT_TITLE_2725' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App