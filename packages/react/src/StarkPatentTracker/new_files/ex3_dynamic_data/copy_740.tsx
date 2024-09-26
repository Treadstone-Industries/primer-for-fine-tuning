import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '772957d9-61d5-4586-8e91-a5cae9516df1', title: 'PATENT_TITLE_7575' },
        { id: 'ce6962b8-7fc9-48fc-84ac-aca16443c8f4', title: 'PATENT_TITLE_9245' },
        { id: 'cb64f05e-e61d-4ccf-8f31-2268d59b3944', title: 'PATENT_TITLE_5291' },
        { id: 'a0974658-c973-4c22-8b95-cdbe13ef24c9', title: 'PATENT_TITLE_3864' },
        { id: 'ba445f35-db82-438e-99f8-de5f4a74ccbf', title: 'PATENT_TITLE_7473' },
        { id: '3a77f3c3-cdff-4ada-bfe5-e63e182af56c', title: 'PATENT_TITLE_1176' },
        { id: 'e4afbd91-db89-4ea3-aac5-4ffb18697906', title: 'PATENT_TITLE_4554' },
        { id: '94fa9fbb-61d4-41a2-9bd7-95ce6be0d467', title: 'PATENT_TITLE_6664' },
        { id: '5ff23fd6-163b-422c-be63-ec08d5cd1d93', title: 'PATENT_TITLE_1279' },
        { id: '1d888c59-40db-4806-a40e-6ce377f5b380', title: 'PATENT_TITLE_5014' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App