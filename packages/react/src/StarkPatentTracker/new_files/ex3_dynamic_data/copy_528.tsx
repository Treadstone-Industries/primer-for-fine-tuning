import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'aa265539-54f1-4bbf-b3a1-685fde7149f7', title: 'PATENT_TITLE_3566' },
        { id: 'd3f4946a-d8a6-4090-8c44-e95a11fcc2f3', title: 'PATENT_TITLE_7681' },
        { id: '7ea6693e-7b64-4d9b-a167-f5193718d76f', title: 'PATENT_TITLE_3856' },
        { id: '9ada197a-1694-4bb7-8445-fb83acfe076a', title: 'PATENT_TITLE_4990' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App