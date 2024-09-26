import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '94d8908e-b7b5-4699-9c2a-2037d75dd562', title: 'PATENT_TITLE_8460' },
        { id: 'dac81fca-7fbf-4149-8a97-6a4dd025d136', title: 'PATENT_TITLE_2921' },
        { id: 'b7034236-03eb-4e5c-b231-486dde97b07b', title: 'PATENT_TITLE_5166' },
        { id: '814e22d9-6ebf-41cc-88cd-2200deaedec3', title: 'PATENT_TITLE_6717' },
        { id: '3f188053-1991-4577-855a-28b771fadae8', title: 'PATENT_TITLE_9439' },
        { id: '9082dbf0-f2e8-4cc5-8b84-023f8dd1ad70', title: 'PATENT_TITLE_3515' },
        { id: '65c0836c-28d4-4bd5-a5c9-79c09691b58f', title: 'PATENT_TITLE_5078' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App