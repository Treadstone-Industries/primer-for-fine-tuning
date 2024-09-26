import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0ac1bbeb-2524-4d56-a2ce-cfbb477cbfd7', title: 'PATENT_TITLE_6474' },
        { id: 'b0676854-5dc3-4073-b7a6-39e465b9c5f2', title: 'PATENT_TITLE_7555' },
        { id: '226e23ef-f61a-41be-a272-1e7c612fd22b', title: 'PATENT_TITLE_2443' },
        { id: '31625438-9d39-410c-acf3-71e853846eb6', title: 'PATENT_TITLE_3577' },
        { id: '023ce504-5088-4afc-9ac2-2a4c4af3a924', title: 'PATENT_TITLE_7416' },
        { id: 'f86070f3-7233-4a85-88cd-272912d24f8d', title: 'PATENT_TITLE_1832' },
        { id: '54a6abd7-c0fe-4db1-b013-49eaa5f918ff', title: 'PATENT_TITLE_7790' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App