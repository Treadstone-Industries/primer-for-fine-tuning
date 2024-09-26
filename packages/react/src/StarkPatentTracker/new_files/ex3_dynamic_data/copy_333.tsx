import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '50b55775-b0ce-464c-a8d7-7251af3af6b6', title: 'PATENT_TITLE_8919' },
        { id: '26662cfb-8b7d-4dbd-acd8-6c0881843bbe', title: 'PATENT_TITLE_9943' },
        { id: '1e061f51-ccc6-48b7-a580-40a5f28359e2', title: 'PATENT_TITLE_8320' },
        { id: 'de7c32db-e319-47b4-aad1-9fddf0d6031c', title: 'PATENT_TITLE_7285' },
        { id: '4c17fdef-f028-48e2-a51a-668a470e16c6', title: 'PATENT_TITLE_8196' },
        { id: '6ff06ef5-cf8d-49c4-aaa8-b896d2b8b2db', title: 'PATENT_TITLE_5999' },
        { id: 'a7f52fb7-ff97-4b23-a5eb-4b331b962049', title: 'PATENT_TITLE_9067' },
        { id: '3ceaff05-883e-4ed9-9429-a765790d6af8', title: 'PATENT_TITLE_7997' },
        { id: 'bd9a1321-3a85-49bd-8515-946c9fe4537e', title: 'PATENT_TITLE_7023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App