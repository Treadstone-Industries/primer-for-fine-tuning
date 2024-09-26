import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '38cb8e56-4166-4768-9111-1f869e3b43ad', title: 'PATENT_TITLE_5197' },
        { id: '89f9daa1-8531-49c4-b7e5-8bb885198270', title: 'PATENT_TITLE_3966' },
        { id: 'b827fee5-947c-4393-8d73-eb2672811abb', title: 'PATENT_TITLE_1793' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App