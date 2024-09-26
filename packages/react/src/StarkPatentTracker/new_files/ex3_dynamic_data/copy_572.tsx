import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fd122df0-0463-40ab-a4c8-a2b2a2a2eb70', title: 'PATENT_TITLE_4880' },
        { id: '81bfee24-1a4c-48de-9ea2-5592f987ea9d', title: 'PATENT_TITLE_4328' },
        { id: 'db41a5bc-c94f-4c81-9085-0992f06d47c8', title: 'PATENT_TITLE_3073' },
        { id: '2942a7a6-6865-4384-9642-3161656f812a', title: 'PATENT_TITLE_3155' },
        { id: '07588495-7c0e-4b97-a82c-4295fef192c5', title: 'PATENT_TITLE_4388' },
        { id: '3e11d283-a643-4235-aa7d-9d8d8efab981', title: 'PATENT_TITLE_5701' },
        { id: 'a90d6293-342b-40a9-88a3-c73d9e0267cb', title: 'PATENT_TITLE_2316' },
        { id: '69c67313-0f4d-4ba8-a7f7-3151fa9c28c7', title: 'PATENT_TITLE_4660' },
        { id: 'cd302944-3d90-473e-917a-19ab63090a29', title: 'PATENT_TITLE_4202' },
        { id: 'b60acb3f-95e1-4711-9b47-eddd1b6f0ed2', title: 'PATENT_TITLE_5804' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App