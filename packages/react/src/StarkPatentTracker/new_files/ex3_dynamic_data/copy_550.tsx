import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8fe9604e-772e-4604-aa18-7479ba8ed434', title: 'PATENT_TITLE_7856' },
        { id: '69060c97-484a-45f7-925d-e399f6652e13', title: 'PATENT_TITLE_7800' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App