import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '88d63f55-4d8a-4129-b051-8d44855c6d6a', title: 'PATENT_TITLE_4550' },
        { id: '0a4f0dca-fef1-4c0f-a291-c7fd0ef12a8a', title: 'PATENT_TITLE_6271' },
        { id: '8065bb19-6f5e-494e-854b-da1a0ee4fd85', title: 'PATENT_TITLE_1335' },
        { id: '4bcd2bf7-7e8b-4de0-b539-c3c7c8cc0b30', title: 'PATENT_TITLE_7324' },
        { id: 'f528d96c-6934-4e4b-8661-b7e4fa9ebe63', title: 'PATENT_TITLE_8288' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App