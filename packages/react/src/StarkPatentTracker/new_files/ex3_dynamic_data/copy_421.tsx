import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9aa49608-fb6b-4af4-87a8-318bb85179e5', title: 'PATENT_TITLE_3195' },
        { id: '7797a924-516c-401c-9f0f-b2be4da9fdcf', title: 'PATENT_TITLE_4208' },
        { id: 'dcfcfc42-002d-4e96-86f7-a8422d57839d', title: 'PATENT_TITLE_6840' },
        { id: 'e7774b22-7b6d-4d62-8e7c-272b8f206ac0', title: 'PATENT_TITLE_8432' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App