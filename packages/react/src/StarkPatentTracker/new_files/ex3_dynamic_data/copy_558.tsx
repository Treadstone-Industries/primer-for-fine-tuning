import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bbd37bf1-952d-4442-b388-cee23e0a0013', title: 'PATENT_TITLE_3295' },
        { id: '2a0a4ef0-31b9-4ffe-8273-94e6dda4db28', title: 'PATENT_TITLE_1709' },
        { id: '53f3993f-3f45-45bc-b7d2-2b3117709715', title: 'PATENT_TITLE_7307' },
        { id: '403a9349-ee3b-4369-8043-453c55825497', title: 'PATENT_TITLE_3439' },
        { id: '509e7634-2897-4670-9fc1-376d3db56240', title: 'PATENT_TITLE_3241' },
        { id: '5ec72174-69ac-44c9-a6fd-a15e9481af0b', title: 'PATENT_TITLE_7462' },
        { id: 'e4295558-ad2c-46d1-8cd1-bf7375ba5968', title: 'PATENT_TITLE_6040' },
        { id: '96f8346b-22b3-43d3-bdb4-7b702c2b809a', title: 'PATENT_TITLE_6612' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App