import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '25fc8c78-0451-4869-bdb6-fef31ef8bad7', title: 'PATENT_TITLE_7472' },
        { id: 'f94091cf-71d3-4142-a230-98f1e6b4146e', title: 'PATENT_TITLE_7297' },
        { id: 'e72ea7f4-be19-4542-83c7-6162784c315c', title: 'PATENT_TITLE_9408' },
        { id: '589ecd19-2eb9-4bfa-9e2a-b9d357c7c78f', title: 'PATENT_TITLE_6093' },
        { id: 'edd50489-6301-431a-be72-e1d0e17ad536', title: 'PATENT_TITLE_1836' },
        { id: 'ef0cb78b-1e05-4dfb-9c77-a9e52417cc51', title: 'PATENT_TITLE_8760' },
        { id: 'db9f5e49-ef36-4186-a4ba-e2283d2a2c7c', title: 'PATENT_TITLE_2276' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App