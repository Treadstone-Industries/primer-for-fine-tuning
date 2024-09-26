import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dabe4b79-ccc7-4d19-ae89-6b24e9af3cab', title: 'PATENT_TITLE_5789' },
        { id: 'c14400dc-039b-4974-abe4-7243cb34b920', title: 'PATENT_TITLE_5223' },
        { id: '5dd67433-d226-4667-a3af-9775b6ad61a3', title: 'PATENT_TITLE_2110' },
        { id: '77a08c66-989f-4854-a1a8-698ac3c1af50', title: 'PATENT_TITLE_9750' },
        { id: '0e85c95e-1958-4f04-9a4b-ab5c8254c637', title: 'PATENT_TITLE_8709' },
        { id: 'a1a12fa3-48b5-4eee-9384-7172ff532667', title: 'PATENT_TITLE_7812' },
        { id: 'c218ab3c-8be6-4eb3-9f21-d8d33adb852b', title: 'PATENT_TITLE_8268' },
        { id: 'f938f2c1-7a9b-4c53-b806-db30fb55dcd9', title: 'PATENT_TITLE_2569' },
        { id: 'cb7b95f9-11af-4b96-a0f3-deaec4d5a61b', title: 'PATENT_TITLE_4681' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App