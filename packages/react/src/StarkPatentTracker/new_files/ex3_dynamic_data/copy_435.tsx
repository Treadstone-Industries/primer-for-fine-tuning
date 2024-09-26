import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '11c71fee-01a3-4e80-ba81-2724ec18cf12', title: 'PATENT_TITLE_6407' },
        { id: '546869e2-4982-4e16-acf9-ee8532c7c855', title: 'PATENT_TITLE_7912' },
        { id: 'ef7027ff-0a2e-46db-89be-8bbddeb2c803', title: 'PATENT_TITLE_9527' },
        { id: 'ed952fec-8918-415e-acd7-f1cd8d3be9f8', title: 'PATENT_TITLE_4273' },
        { id: 'f25d98db-9c89-4cf3-b860-c470ce7f4932', title: 'PATENT_TITLE_9264' },
        { id: 'ac3b988a-2f83-43b4-b6ed-d065c85f5e5f', title: 'PATENT_TITLE_9910' },
        { id: '22c723e3-ac45-4067-8eec-cac814fef91e', title: 'PATENT_TITLE_8992' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App