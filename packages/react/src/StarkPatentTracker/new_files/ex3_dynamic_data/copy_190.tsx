import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5160638f-c31b-4c30-a7e4-db2c842f2089', title: 'PATENT_TITLE_8722' },
        { id: 'b7f9ede1-de87-47f8-9102-4f2534ab89cc', title: 'PATENT_TITLE_8427' },
        { id: '87d0496d-b04f-4f55-8e6a-2a22419105c4', title: 'PATENT_TITLE_2564' },
        { id: '5400a845-043b-40b1-93e0-692a4eda4804', title: 'PATENT_TITLE_5116' },
        { id: '19f3cdf1-58e3-452f-aca6-0bd8de3ba4c0', title: 'PATENT_TITLE_5556' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App