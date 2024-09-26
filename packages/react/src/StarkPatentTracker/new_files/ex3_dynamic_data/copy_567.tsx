import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '751cee8a-7c86-462d-bb4e-d83b02c3fa23', title: 'PATENT_TITLE_9944' },
        { id: '0ec30e96-24e5-43fb-b587-352bb35755d3', title: 'PATENT_TITLE_4852' },
        { id: '46a09cde-d54c-4450-a737-a5ae6b4cfa90', title: 'PATENT_TITLE_7179' },
        { id: '2cb666b2-7bd4-4788-82f6-9da144ab1dba', title: 'PATENT_TITLE_9347' },
        { id: '3bed350d-6769-42c6-9582-267f9d6d4e66', title: 'PATENT_TITLE_2972' },
        { id: 'fdfdd3d1-4d34-4124-8549-1962cacaf377', title: 'PATENT_TITLE_4366' },
        { id: '544ae0aa-4dc0-4669-b80a-000eff6ce14e', title: 'PATENT_TITLE_8775' },
        { id: '619f0fab-f99d-4179-a8d1-2b4350471258', title: 'PATENT_TITLE_5617' },
        { id: 'da6cb439-0bea-4596-8f64-2a66ca2d567c', title: 'PATENT_TITLE_1125' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App