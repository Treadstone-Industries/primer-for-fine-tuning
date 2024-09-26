import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7a4a5623-f476-4533-aeab-af4d93682a6b', title: 'PATENT_TITLE_5318' },
        { id: '7abde0e6-a1de-47c2-a92d-731a77672f67', title: 'PATENT_TITLE_5441' },
        { id: '5495256c-50b9-4b85-9587-12d7b2500eef', title: 'PATENT_TITLE_5262' },
        { id: 'fa92bad8-7e68-4576-9919-fa4f91c52d98', title: 'PATENT_TITLE_6106' },
        { id: '3f9a5f37-31af-41cb-8f4d-029dc0672d01', title: 'PATENT_TITLE_3698' },
        { id: '7660d7ca-d9ef-4275-877f-6521f878f90b', title: 'PATENT_TITLE_2666' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App