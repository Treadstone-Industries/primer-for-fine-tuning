import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bb2fb755-f335-4e21-a0a7-d0dec6b16ef7', title: 'PATENT_TITLE_1135' },
        { id: '632753bb-25ab-45f4-a825-7de89dd83570', title: 'PATENT_TITLE_6813' },
        { id: '1657c97f-1656-4616-aaaa-b7e86c88aa46', title: 'PATENT_TITLE_6507' },
        { id: '0569272f-e928-4200-baa3-b57c61905ab2', title: 'PATENT_TITLE_3369' },
        { id: '2ba9a2ce-3e2a-48fd-9291-efe265c5e4e5', title: 'PATENT_TITLE_7951' },
        { id: 'e75ce298-4cfd-497f-a5be-4a5986886e65', title: 'PATENT_TITLE_6471' },
        { id: 'c3cfab55-a802-4110-b8a8-7534b9b62aa9', title: 'PATENT_TITLE_6882' },
        { id: '63ed1c2f-d667-46c2-bcc6-96aa088071b5', title: 'PATENT_TITLE_6007' },
        { id: '28ea5256-e691-4404-83f6-38150d5302d6', title: 'PATENT_TITLE_6025' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App