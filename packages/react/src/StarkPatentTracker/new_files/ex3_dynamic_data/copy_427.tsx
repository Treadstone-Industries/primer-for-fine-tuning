import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '854e3f37-c513-4b4c-bf66-c6dd384ab6ba', title: 'PATENT_TITLE_7499' },
        { id: '88c45372-67ad-4cdf-8c93-ab27cdc0b73f', title: 'PATENT_TITLE_5739' },
        { id: '72353cf9-d670-4be0-9dad-b3cc6d27cac4', title: 'PATENT_TITLE_2345' },
        { id: 'ec4fdb22-a69c-4cfc-b938-204241e8aa2b', title: 'PATENT_TITLE_9888' },
        { id: '9d29c1be-2455-491b-8332-1e2e55d6551c', title: 'PATENT_TITLE_4618' },
        { id: '6c5b6ca3-5723-4147-8e8c-d379a897fc5f', title: 'PATENT_TITLE_6219' },
        { id: '53d05fa1-b82f-462a-9385-cbc77ab153a5', title: 'PATENT_TITLE_8275' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App