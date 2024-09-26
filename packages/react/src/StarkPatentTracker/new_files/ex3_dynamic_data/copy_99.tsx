import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9af5557c-8a32-4d70-a43d-6b8e37c2180e', title: 'PATENT_TITLE_8078' },
        { id: '117121bb-a0cf-487a-9c95-57ac557e6e14', title: 'PATENT_TITLE_1229' },
        { id: 'fa4bd797-d282-4e4d-b114-4fbaea8302ca', title: 'PATENT_TITLE_9242' },
        { id: 'a92adb0e-1e93-4cac-904e-22e8f92ee0e7', title: 'PATENT_TITLE_3465' },
        { id: '932ec629-c7dd-47bb-8c0a-909a2378bcb3', title: 'PATENT_TITLE_8691' },
        { id: '25a32702-bd1b-43a2-8d5a-090156d730c5', title: 'PATENT_TITLE_5573' },
        { id: '53722fca-7417-481a-9725-fa4a61bede8c', title: 'PATENT_TITLE_1191' },
        { id: 'd62f3b4b-4c2a-4836-ae13-388ac37e9ff7', title: 'PATENT_TITLE_9130' },
        { id: 'fe5d7176-108c-4cd0-8562-fe28bf8a4d48', title: 'PATENT_TITLE_7519' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App