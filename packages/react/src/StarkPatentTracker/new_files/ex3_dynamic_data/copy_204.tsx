import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7078a134-8743-4508-ad06-41c325cb3c94', title: 'PATENT_TITLE_7386' },
        { id: 'e9492189-5a32-4e84-9105-5a31fe4050da', title: 'PATENT_TITLE_4050' },
        { id: 'd2f4aa4a-e107-46ae-87bb-28b891bb162e', title: 'PATENT_TITLE_1965' },
        { id: '523eb9e5-b520-4ae1-847d-9e1f3b80fa1b', title: 'PATENT_TITLE_5350' },
        { id: 'd1994b42-87b9-47ac-b63e-e25f084e73d3', title: 'PATENT_TITLE_8191' },
        { id: 'e1694ad7-5de3-44f2-ba2b-aa21c5e3cc0e', title: 'PATENT_TITLE_4078' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App