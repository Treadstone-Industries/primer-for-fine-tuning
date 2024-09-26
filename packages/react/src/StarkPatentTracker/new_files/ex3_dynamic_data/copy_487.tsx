import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '797da397-17c1-4536-82e4-7feb92eb4123', title: 'PATENT_TITLE_8052' },
        { id: 'ae291c53-affe-4a32-a4bf-45dc51072b69', title: 'PATENT_TITLE_8061' },
        { id: '85be9087-5b86-40b7-8dc1-ee835687097c', title: 'PATENT_TITLE_5176' },
        { id: '8f8eabc1-c6d0-4bdd-b794-4ebef00ba4e9', title: 'PATENT_TITLE_9568' },
        { id: 'a1dce8ce-d20c-4afe-bf87-b95c5539364d', title: 'PATENT_TITLE_3611' },
        { id: '9d9231f0-d1de-4d77-bf7c-103aaf29fd1c', title: 'PATENT_TITLE_6664' },
        { id: 'fd02a903-8f38-49e6-a3e5-a60cef513945', title: 'PATENT_TITLE_6967' },
        { id: '1596a377-895a-48b7-85ee-e2825105294e', title: 'PATENT_TITLE_9099' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App