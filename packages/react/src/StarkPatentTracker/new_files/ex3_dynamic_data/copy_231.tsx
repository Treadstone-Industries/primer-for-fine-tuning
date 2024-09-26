import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e0eb96bf-bf36-49dc-8d19-7bd9422e9bb4', title: 'PATENT_TITLE_9760' },
        { id: '6f165bab-4f91-4eba-94c6-0a70420e21f0', title: 'PATENT_TITLE_6562' },
        { id: 'e2976e3b-bf74-4091-9dca-aa27ffc1a247', title: 'PATENT_TITLE_7066' },
        { id: '5dd3165d-f31f-4af8-975c-80864208402d', title: 'PATENT_TITLE_2881' },
        { id: 'a3726819-6d7d-479e-9663-7dcf67315f5f', title: 'PATENT_TITLE_8355' },
        { id: '2bab91ee-58ea-4648-89a3-3ba695b32b00', title: 'PATENT_TITLE_4483' },
        { id: 'f8b49392-6e3e-4bae-a77d-bbf5a081d0a2', title: 'PATENT_TITLE_6924' },
        { id: '7c11d3d4-a72e-4c4f-9d5e-e4c410bf93ae', title: 'PATENT_TITLE_1560' },
        { id: '39aa29ad-f60d-4037-8208-8cf487e4e352', title: 'PATENT_TITLE_7657' },
        { id: '7c5fb069-0992-44ca-b3b1-58c9dd81bd99', title: 'PATENT_TITLE_4731' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App