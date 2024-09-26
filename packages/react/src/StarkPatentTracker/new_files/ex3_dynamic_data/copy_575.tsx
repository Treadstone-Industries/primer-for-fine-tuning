import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e6697337-341f-4f3d-9907-7fe62823050b', title: 'PATENT_TITLE_8918' },
        { id: '70b15583-a47d-475e-9fe2-ed56dfdbc392', title: 'PATENT_TITLE_4503' },
        { id: '4595c22f-cb77-4db5-97ea-f632917a0a70', title: 'PATENT_TITLE_5565' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App