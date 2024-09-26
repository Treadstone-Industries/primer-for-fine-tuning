import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '05ca1868-e6a3-418e-bcf7-2da1470a01bb', title: 'PATENT_TITLE_4644' },
        { id: 'da4a028f-8905-48d9-a169-1d7c05db98ea', title: 'PATENT_TITLE_6085' },
        { id: '9abddced-d2db-4e8c-9765-a45c6dc244b1', title: 'PATENT_TITLE_8054' },
        { id: 'e7d22bcc-1615-44d4-a7ce-5af63ae66bc9', title: 'PATENT_TITLE_5314' },
        { id: '0b103d21-856f-44d7-87b8-0a0c8a983abf', title: 'PATENT_TITLE_5444' },
        { id: 'e55e5886-6586-4897-b099-7685bcbd4585', title: 'PATENT_TITLE_5580' },
        { id: '472910de-62d5-4e3c-8c5c-c79eb220fc0c', title: 'PATENT_TITLE_6524' },
        { id: 'f3ff76c4-2e20-447f-a5bb-8c35d7184460', title: 'PATENT_TITLE_2889' },
        { id: 'c27b510e-5e9d-4b0f-ad42-49aa12987658', title: 'PATENT_TITLE_9362' },
        { id: '61caa25b-1229-4bc7-b76e-e369f00c7480', title: 'PATENT_TITLE_5629' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App