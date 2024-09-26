import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '427ec616-85ab-499a-bf0d-0d265399d9f5', title: 'PATENT_TITLE_9511' },
        { id: 'b7b046af-a462-4c65-9774-b04b280526e1', title: 'PATENT_TITLE_2036' },
        { id: 'e76b21cf-09f0-41d8-8467-535a18bf0e0a', title: 'PATENT_TITLE_6612' },
        { id: 'b10bd263-8c4e-45cd-9627-293280b353c2', title: 'PATENT_TITLE_7132' },
        { id: 'c603592a-5f26-42aa-b4eb-26ac9991dac1', title: 'PATENT_TITLE_7135' },
        { id: '1bb6d7e8-e86f-4d72-8e93-625be593fae3', title: 'PATENT_TITLE_5673' },
        { id: '70e0bd84-3c4a-447b-be11-a8f73ea08b7c', title: 'PATENT_TITLE_7133' },
        { id: '45982f8b-1029-4581-8b7e-2946fc2ec0ef', title: 'PATENT_TITLE_8529' },
        { id: 'b3872c9f-a676-43ac-ac41-faf0cb0268fb', title: 'PATENT_TITLE_5984' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App