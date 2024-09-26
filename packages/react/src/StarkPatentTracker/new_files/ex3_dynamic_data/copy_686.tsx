import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fc4612e4-01d2-468c-b758-797e871e36d0', title: 'PATENT_TITLE_2670' },
        { id: 'f0ff9e9d-476f-40bd-a7bb-4da4720fc090', title: 'PATENT_TITLE_8934' },
        { id: '91c6727a-ae65-4ce1-a5d3-5afad33b2cc4', title: 'PATENT_TITLE_4403' },
        { id: 'f0fc2d49-025c-4dfd-9866-50e9b51b6860', title: 'PATENT_TITLE_3474' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App