import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f28afdbb-81ca-4fbe-87de-4fd6ea9be24e', title: 'PATENT_TITLE_8098' },
        { id: '056c6816-ddd1-456e-92a0-3a677c95fc7d', title: 'PATENT_TITLE_1833' },
        { id: '78f80783-da65-4175-81d4-6987d5a821a7', title: 'PATENT_TITLE_2502' },
        { id: 'b362f5ac-0d52-4d75-921a-572469574142', title: 'PATENT_TITLE_5078' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App