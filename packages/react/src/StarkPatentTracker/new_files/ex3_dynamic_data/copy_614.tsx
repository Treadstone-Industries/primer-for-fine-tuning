import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5a5baf29-b08f-4ac4-95b1-4a6bb930ece1', title: 'PATENT_TITLE_9331' },
        { id: 'da923edf-081d-4493-938e-76f1ddbf3b17', title: 'PATENT_TITLE_1449' },
        { id: '0af1e4eb-0e1a-440b-8bbd-a507ceb0de0d', title: 'PATENT_TITLE_8478' },
        { id: 'df71c664-8569-4622-8afd-5e9912d0091c', title: 'PATENT_TITLE_1315' },
        { id: '0ac55e61-ff35-463a-a70c-deea2fc5cbc0', title: 'PATENT_TITLE_9299' },
        { id: '98a32345-d231-48ca-ba39-d968f8cae19b', title: 'PATENT_TITLE_6013' },
        { id: 'f2a036cb-20c0-4e2f-8de2-1c4d33b9125f', title: 'PATENT_TITLE_2561' },
        { id: 'f687948a-8c92-4827-b527-d3f8355f324a', title: 'PATENT_TITLE_5590' },
        { id: 'a4af1457-a1d9-49bb-94ec-520da80a16d2', title: 'PATENT_TITLE_7296' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App