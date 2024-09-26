import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3e388523-5817-40b0-90c5-9ad745220b21', title: 'PATENT_TITLE_5043' },
        { id: '418079f1-53b1-49dc-892e-f169683cc29c', title: 'PATENT_TITLE_4966' },
        { id: '9e6ef5cf-6300-43f5-ab7c-fb0662d6111d', title: 'PATENT_TITLE_8012' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App