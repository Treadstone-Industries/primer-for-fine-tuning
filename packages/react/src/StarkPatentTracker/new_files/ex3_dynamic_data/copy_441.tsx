import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '23e2b30a-839a-421b-896d-bedd8315750f', title: 'PATENT_TITLE_8325' },
        { id: '397af518-0e90-44b9-be5b-773ed8bc7f27', title: 'PATENT_TITLE_8466' },
        { id: '6e506d59-47fc-4db8-bd2f-e30b7e1a3b4d', title: 'PATENT_TITLE_6157' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App