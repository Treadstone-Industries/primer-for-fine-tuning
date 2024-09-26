import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a849d847-f064-403f-8c45-b08f91a6ae77', title: 'PATENT_TITLE_7304' },
        { id: 'ee4000dd-79b0-4bb9-80d4-467fbb6f8570', title: 'PATENT_TITLE_9236' },
        { id: 'c5ba75b2-4d32-4ec6-a407-37514aac8b01', title: 'PATENT_TITLE_2386' },
        { id: '218142e8-5989-4937-8969-5d718d934e1f', title: 'PATENT_TITLE_8536' },
        { id: '62e01e5c-1de7-4ebf-88a6-79b256b437a3', title: 'PATENT_TITLE_9063' },
        { id: 'b674965b-ec9d-4103-9bb4-32b4c693fd27', title: 'PATENT_TITLE_1953' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App