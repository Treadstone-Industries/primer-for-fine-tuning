import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f4928381-5ad7-43f7-b7b4-dd4a2561dd38', title: 'PATENT_TITLE_3473' },
        { id: 'c1dc614e-c24d-458a-9d4c-7d6ce60a696d', title: 'PATENT_TITLE_3901' },
        { id: '85d32ea9-7911-47ee-ba01-e7ffb1f63b70', title: 'PATENT_TITLE_3802' },
        { id: 'eaf9c23e-920a-4d86-ac20-0da45af310aa', title: 'PATENT_TITLE_5758' },
        { id: '9b5baccd-142a-4cb1-8eb4-2cc66189ff82', title: 'PATENT_TITLE_4382' },
        { id: '86a0fc63-1141-4dc4-8386-0485d990fcd1', title: 'PATENT_TITLE_3860' },
        { id: '974a2780-c442-4050-bbd2-b5cc13cd4705', title: 'PATENT_TITLE_4910' },
        { id: 'd5a1a322-72a7-4da7-9568-4a52ebbbccea', title: 'PATENT_TITLE_1101' },
        { id: '2842f9f9-2988-479c-a127-bba2a112c2aa', title: 'PATENT_TITLE_8094' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App