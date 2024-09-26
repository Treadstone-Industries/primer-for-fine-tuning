import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd36efe41-e9f5-4aea-a8e8-028ecd805192', title: 'PATENT_TITLE_9406' },
        { id: '5d349fa2-df4e-45a1-9105-e180de481205', title: 'PATENT_TITLE_1789' },
        { id: 'cee5f801-dc02-43e4-8926-38a1184a44a8', title: 'PATENT_TITLE_8266' },
        { id: '2e6f8fea-e354-4734-9a42-911d3ae6be0c', title: 'PATENT_TITLE_2262' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App