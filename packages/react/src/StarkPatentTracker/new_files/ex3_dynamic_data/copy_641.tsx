import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7da2ba71-6e90-467c-b4cc-f180734d75fd', title: 'PATENT_TITLE_5210' },
        { id: 'd356f8c1-0711-41ff-9f18-c88b94d8b68b', title: 'PATENT_TITLE_2199' },
        { id: '71b2be88-b30f-4224-800a-5a9558241938', title: 'PATENT_TITLE_4486' },
        { id: '6836cc99-df1c-433d-be38-bc547cf3aaef', title: 'PATENT_TITLE_9152' },
        { id: 'e46d4b60-7626-4a4e-baa4-56b9bf97264d', title: 'PATENT_TITLE_7985' },
        { id: 'e316e06e-ebbe-4075-8502-81062ebb09fe', title: 'PATENT_TITLE_1602' },
        { id: 'b33b6b21-4800-448d-87b4-9f272f307832', title: 'PATENT_TITLE_5491' },
        { id: '5619b1eb-3adf-4902-9fc8-3e6d6ea4c61c', title: 'PATENT_TITLE_2554' },
        { id: '47263b69-1037-4905-b12d-3d68d289a89a', title: 'PATENT_TITLE_8110' },
        { id: '441210f9-4f40-48d2-a685-33dbf25af313', title: 'PATENT_TITLE_6042' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App