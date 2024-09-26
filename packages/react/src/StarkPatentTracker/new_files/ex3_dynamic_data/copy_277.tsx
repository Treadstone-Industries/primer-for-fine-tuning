import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0c38c79b-4e98-43f9-ac18-2126d6aba841', title: 'PATENT_TITLE_5730' },
        { id: '8d0bbb26-e6c8-48b3-a3f0-ba3ee78ebec7', title: 'PATENT_TITLE_8243' },
        { id: '1e2d3d75-158b-4a77-9ab6-a7ff131e2091', title: 'PATENT_TITLE_3698' },
        { id: '230ad099-deba-4931-83fa-becc36dee468', title: 'PATENT_TITLE_9293' },
        { id: 'b14a7b59-e5a5-4b93-a470-d8845990fabc', title: 'PATENT_TITLE_9299' },
        { id: '62b05246-533b-45b5-9e68-956ba8447b1b', title: 'PATENT_TITLE_2034' },
        { id: '1ff21e5a-36d7-41d9-8b70-dd4368cec497', title: 'PATENT_TITLE_6008' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App