import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '159bd478-4158-4904-a4c1-8e67e35a49ca', title: 'PATENT_TITLE_3017' },
        { id: 'b858626d-0f7a-4d7a-bb01-cf9e9a830549', title: 'PATENT_TITLE_9386' },
        { id: '3f41b800-db28-4170-9434-97988e65fc18', title: 'PATENT_TITLE_4881' },
        { id: '7e1b14ac-734a-4cf9-bd2e-bbbad15c8304', title: 'PATENT_TITLE_5799' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App