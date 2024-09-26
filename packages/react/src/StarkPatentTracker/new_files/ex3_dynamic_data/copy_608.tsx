import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e830fd53-a66a-4afd-9873-de3f8cf0ea52', title: 'PATENT_TITLE_1554' },
        { id: 'b4c06920-fd1b-460e-9f7f-ebdb5e25bc42', title: 'PATENT_TITLE_2977' },
        { id: '02fc006f-ff8d-4500-8ef2-b784d2da25a6', title: 'PATENT_TITLE_2379' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App