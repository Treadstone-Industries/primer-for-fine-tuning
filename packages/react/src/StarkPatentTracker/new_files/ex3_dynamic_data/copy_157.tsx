import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ce17442c-c366-4449-bbad-0dbde79ff4c3', title: 'PATENT_TITLE_4374' },
        { id: '369cf892-93c9-43f7-a2f6-6cee8bbe11a9', title: 'PATENT_TITLE_7474' },
        { id: 'd0a2a7a8-142e-400a-92a4-6f11a0b68dfd', title: 'PATENT_TITLE_7629' },
        { id: '1b5ffac9-b00d-4345-a31a-785977411857', title: 'PATENT_TITLE_3630' },
        { id: '5139b1a4-b9c8-455d-a5bd-1ba2ed97d957', title: 'PATENT_TITLE_8997' },
        { id: 'd1f13890-6689-40e3-9807-e2acc2619bf5', title: 'PATENT_TITLE_1620' },
        { id: '4d925641-8266-4ce3-becc-7778be88421f', title: 'PATENT_TITLE_1654' },
        { id: '0629d381-cdda-434a-bd3c-0ddbf77ad6c1', title: 'PATENT_TITLE_1349' },
        { id: 'c7c5ce9d-59c6-4e87-9fb1-02b35793d19e', title: 'PATENT_TITLE_5771' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App