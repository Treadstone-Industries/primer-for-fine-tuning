import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2017bd16-ddb8-4582-9304-87c51a987efc', title: 'PATENT_TITLE_8669' },
        { id: '8f43aa7b-df43-4a6f-90cb-5a0ac6eeec42', title: 'PATENT_TITLE_1249' },
        { id: 'fee93f8d-8548-4707-9cca-8924d508fbea', title: 'PATENT_TITLE_4002' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App