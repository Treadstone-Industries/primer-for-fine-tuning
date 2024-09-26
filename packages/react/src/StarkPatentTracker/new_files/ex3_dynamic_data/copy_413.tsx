import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bc734e7d-6e11-4565-b7ad-09211e0de3bb', title: 'PATENT_TITLE_6974' },
        { id: 'b17dc2b5-d8fd-472b-a100-6361543721dc', title: 'PATENT_TITLE_5659' },
        { id: '433779fd-4930-4c58-b969-3b274ba48e68', title: 'PATENT_TITLE_1270' },
        { id: 'd0c8d9d3-e9ef-4a44-a97d-cca4eccdeb6c', title: 'PATENT_TITLE_2701' },
        { id: 'ceaa8c5f-73b2-4314-965a-2f2312e51539', title: 'PATENT_TITLE_1168' },
        { id: '57c4751e-752c-4288-ac65-c2f7571b67fd', title: 'PATENT_TITLE_3625' },
        { id: '61d981be-17f6-4eb8-a653-06e724cd9749', title: 'PATENT_TITLE_2834' },
        { id: 'c48ef060-d9a1-4453-830a-0228b9933080', title: 'PATENT_TITLE_3554' },
        { id: 'c5fbb398-1d80-4f3d-8530-cc7658c35a1c', title: 'PATENT_TITLE_2995' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App