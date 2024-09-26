import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dd361400-2f4f-4ae6-bd3a-482e260bd58c', title: 'PATENT_TITLE_8723' },
        { id: '0722855b-e0a5-43f3-b5f4-14c1363f92c7', title: 'PATENT_TITLE_7665' },
        { id: '79b4bd13-ad11-42b8-9378-9d021c1c2985', title: 'PATENT_TITLE_2367' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App