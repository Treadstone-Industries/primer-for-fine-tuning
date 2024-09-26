import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd863ecbf-f782-4ea6-9fec-42bea13950fb', title: 'PATENT_TITLE_9494' },
        { id: '03c3f4fc-a211-4c44-b9b0-38fe5bf102e0', title: 'PATENT_TITLE_8390' },
        { id: '4de17c78-a8eb-410f-88bc-dddae3552212', title: 'PATENT_TITLE_8422' },
        { id: '211c251c-d2b4-457f-93c4-29f995235ea6', title: 'PATENT_TITLE_7666' },
        { id: '91d45c20-08fb-4e61-8719-ca84337a66e4', title: 'PATENT_TITLE_2560' },
        { id: 'e4291104-702c-4924-8de7-0f9d8582dc02', title: 'PATENT_TITLE_5988' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App