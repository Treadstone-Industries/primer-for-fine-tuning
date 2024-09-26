import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fbbc645d-79cc-4314-9348-3e5b63589d3d', title: 'PATENT_TITLE_4583' },
        { id: 'e14614d0-40b0-41c4-a667-f33bba0b7272', title: 'PATENT_TITLE_1449' },
        { id: '5d01fa64-a021-46db-8906-ece501f906c1', title: 'PATENT_TITLE_7965' },
        { id: '056414f8-8198-4bc3-b755-10d1cac980a1', title: 'PATENT_TITLE_2772' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App