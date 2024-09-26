import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '51b83b9a-942e-47f7-9689-2880cf1f36ea', title: 'PATENT_TITLE_6970' },
        { id: 'bf3f1929-1893-4829-b45d-32434d77cb1b', title: 'PATENT_TITLE_8973' },
        { id: '7316cf48-9204-4220-be21-079c851e6115', title: 'PATENT_TITLE_8114' },
        { id: 'dacc9dbd-d816-46fb-a89e-1debb396ff4a', title: 'PATENT_TITLE_5274' },
        { id: 'f2277d79-4678-4696-9e92-4bd32e895dca', title: 'PATENT_TITLE_9348' },
        { id: '0b90cf11-3693-4413-b6ec-28f5d0a83d1e', title: 'PATENT_TITLE_2460' },
        { id: '775aa20a-9c0e-4848-a7b2-e2a4de4d233b', title: 'PATENT_TITLE_3136' },
        { id: '23f13aa3-415c-4647-b1ce-46c2e66d25ff', title: 'PATENT_TITLE_5386' },
        { id: '09d95bca-456b-429b-9bfe-0a981e14ad27', title: 'PATENT_TITLE_4147' },
        { id: '2147e4a5-c05b-466b-b9af-edb23b84c4c6', title: 'PATENT_TITLE_2493' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App