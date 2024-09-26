import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3b7a3c6c-9f09-48ec-8ba9-7d376411b337', title: 'PATENT_TITLE_3423' },
        { id: '4c666c18-1be9-417c-aabc-05dad8c9bc6a', title: 'PATENT_TITLE_3560' },
        { id: '7b5348c0-51fa-48d9-abfd-7f6e91c9a9ce', title: 'PATENT_TITLE_2665' },
        { id: '10ae70f3-c881-4c22-b4e2-c4eaefc6f34f', title: 'PATENT_TITLE_5496' },
        { id: '4e2b6c32-0496-4a23-a6e7-0349dc2ecb9c', title: 'PATENT_TITLE_9128' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App