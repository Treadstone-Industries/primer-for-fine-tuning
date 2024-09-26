import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '494b6f8a-edad-4776-9946-3ca04e757efd', title: 'PATENT_TITLE_4831' },
        { id: 'da7397c2-83fd-4c00-8cb5-21c31b8f6ed7', title: 'PATENT_TITLE_3481' },
        { id: '362ed93c-84c9-4bae-8dbd-9f64567b2b8b', title: 'PATENT_TITLE_7072' },
        { id: 'a0a9a737-c84b-4898-9cee-ba6f37866d2f', title: 'PATENT_TITLE_9834' },
        { id: 'a2f14fed-ed8c-4631-8054-5931d463b927', title: 'PATENT_TITLE_4938' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App