import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8842757d-db1b-4492-881e-a813d46a32ad', title: 'PATENT_TITLE_6944' },
        { id: '04395ff2-4374-4239-8cc3-bbaf6edde960', title: 'PATENT_TITLE_8521' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App