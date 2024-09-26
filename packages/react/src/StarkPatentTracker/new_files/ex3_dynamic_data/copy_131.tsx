import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a3baa3d0-0c74-4c45-9974-fe39656ef55d', title: 'PATENT_TITLE_2481' },
        { id: '4ea3560d-c820-4b22-bd08-df94ad5b6170', title: 'PATENT_TITLE_1093' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App