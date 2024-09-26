import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'eff89bae-2486-43d1-a40e-0526c46f3b42', title: 'PATENT_TITLE_8697' },
        { id: '8a274516-cc26-400c-a7e7-d35123b1cbb4', title: 'PATENT_TITLE_7773' },
        { id: '88c0ca41-225f-42c6-90c7-4ed7d1887145', title: 'PATENT_TITLE_7011' },
        { id: '9e166d0b-543e-4fbb-afad-0631216cc629', title: 'PATENT_TITLE_6334' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App