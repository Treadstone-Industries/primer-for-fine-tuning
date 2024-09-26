import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '35358b93-5f5a-441b-90d6-f43932c5f484', title: 'PATENT_TITLE_5043' },
        { id: '3c6a01bc-ae2a-419f-8bf5-53e4c5e816e1', title: 'PATENT_TITLE_6507' },
        { id: '24e20d37-ece5-4c34-b50d-d733b958db42', title: 'PATENT_TITLE_9961' },
        { id: 'a945c448-7d46-4876-b7dc-f3eaadcaabf9', title: 'PATENT_TITLE_4223' },
        { id: '1fcf6727-87bc-4b32-a35e-ee6700831057', title: 'PATENT_TITLE_3407' },
        { id: '22282b6a-2efe-4193-b621-618986374a5b', title: 'PATENT_TITLE_5959' },
        { id: '9826d13b-961c-43d7-91fd-a17a0052ffa6', title: 'PATENT_TITLE_8909' },
        { id: '9327c766-150c-4b4d-9dd2-7cd928bb6509', title: 'PATENT_TITLE_1206' },
        { id: '4511a0be-bd69-47a2-8469-b88c3be19d85', title: 'PATENT_TITLE_6587' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App