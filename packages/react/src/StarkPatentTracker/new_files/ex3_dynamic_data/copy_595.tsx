import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ec7c47cf-fe24-40b2-900e-d9bef33eba53', title: 'PATENT_TITLE_4076' },
        { id: '95c0384c-ada0-4a44-a703-c3d17bbc5760', title: 'PATENT_TITLE_4916' },
        { id: '9b87fdb7-2975-4e46-9623-e2e21aad6364', title: 'PATENT_TITLE_3723' },
        { id: '0b3461bf-f0f9-4c3a-b75b-57257761e480', title: 'PATENT_TITLE_2629' },
        { id: '9f891150-b085-4e28-8ce3-a79a4ea9e350', title: 'PATENT_TITLE_8970' },
        { id: 'ef6f9662-fd5a-40ca-b82e-83266800c181', title: 'PATENT_TITLE_9831' },
        { id: 'c87300c7-480a-4dbc-8895-8a304caf7a59', title: 'PATENT_TITLE_7087' },
        { id: 'd8eae812-c1e9-4a29-bdc4-4f00317e0a48', title: 'PATENT_TITLE_8001' },
        { id: 'e3d49cc3-10ad-48f0-9dcd-8c897597b874', title: 'PATENT_TITLE_5929' },
        { id: '57bdb7ce-e81f-44b0-9c34-0ef8b3d513fe', title: 'PATENT_TITLE_6644' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App