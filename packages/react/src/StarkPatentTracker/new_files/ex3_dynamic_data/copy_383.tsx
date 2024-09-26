import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7a0e66ec-0078-4e8a-b3fd-81971a165f90', title: 'PATENT_TITLE_7711' },
        { id: 'e77c9cda-df65-4aa2-acac-7d9cecf0b1e9', title: 'PATENT_TITLE_6995' },
        { id: 'b343f1ff-b64a-4da1-8e15-fda48ed3a297', title: 'PATENT_TITLE_6501' },
        { id: '88916892-99d0-415b-bb55-7eae3bbfdb64', title: 'PATENT_TITLE_9549' },
        { id: 'a9cb79fc-2b48-4aa6-ba90-55b6755aa8ac', title: 'PATENT_TITLE_9915' },
        { id: '633442d0-5bd6-4a72-a77a-a39555e02690', title: 'PATENT_TITLE_8441' },
        { id: '5557fb9b-5fa3-4aa0-8149-cf8ba5fef847', title: 'PATENT_TITLE_8794' },
        { id: '36eb7fc0-183a-4a0b-97b4-23487618e49f', title: 'PATENT_TITLE_6443' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App