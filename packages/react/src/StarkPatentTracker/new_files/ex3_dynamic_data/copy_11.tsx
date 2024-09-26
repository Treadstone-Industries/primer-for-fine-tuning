import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '370644ce-4466-464f-95b9-841703fc3a94', title: 'PATENT_TITLE_7574' },
        { id: '3ae02c66-596f-4971-97a6-d39865f999f1', title: 'PATENT_TITLE_8885' },
        { id: 'bf558b34-c685-4fa7-9e93-38b24e946e53', title: 'PATENT_TITLE_6768' },
        { id: 'b467f10b-4556-4e50-948c-38b6632320b0', title: 'PATENT_TITLE_9557' },
        { id: '40dbae36-bf3a-43cb-8238-c4570d620531', title: 'PATENT_TITLE_7739' },
        { id: 'cc9ec4bb-ba93-4a0a-9284-ef8ce9320cfe', title: 'PATENT_TITLE_7628' },
        { id: '5c6a9b9e-2ab9-4734-bf8b-fd145e127b4a', title: 'PATENT_TITLE_3492' },
        { id: '8075a864-87f5-4969-880e-3936620dc28d', title: 'PATENT_TITLE_6119' },
        { id: 'dc73ae2f-66cb-4b3a-bebf-164d79c75786', title: 'PATENT_TITLE_3194' },
        { id: '31ad932d-7e32-49e8-b94f-ff5a37c69e3d', title: 'PATENT_TITLE_4016' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App