import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '71d1dd38-710c-482a-8f74-acdc9e30286d', title: 'PATENT_TITLE_5017' },
        { id: 'f484bf10-5e84-4dfd-aef3-ffb06d9518fd', title: 'PATENT_TITLE_3378' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App