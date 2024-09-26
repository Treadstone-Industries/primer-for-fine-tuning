import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0fbb67c9-358a-4f98-91b9-18ca9b202c7b', title: 'PATENT_TITLE_4897' },
        { id: 'f680090f-2c41-484a-ad43-3e89dff7c98f', title: 'PATENT_TITLE_3344' },
        { id: '0515db73-98dc-4365-89b1-9723766243df', title: 'PATENT_TITLE_4143' },
        { id: 'd6a4bc73-421f-4dbc-8694-1d6f031672d7', title: 'PATENT_TITLE_2552' },
        { id: '0cf1ac08-0149-4edb-ab5e-51295911a282', title: 'PATENT_TITLE_3383' },
        { id: '86028e63-ef3e-4c20-b1f2-8ddabc777801', title: 'PATENT_TITLE_6986' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App