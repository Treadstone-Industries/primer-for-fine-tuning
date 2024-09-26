import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '082d8745-48a0-4e0d-b218-662241e5e457', title: 'PATENT_TITLE_1291' },
        { id: '4c650c45-6b6e-43ce-bdf1-258f7a4177eb', title: 'PATENT_TITLE_9231' },
        { id: 'f1384838-ceab-429d-8339-372600c05eb9', title: 'PATENT_TITLE_4156' },
        { id: '17bd25a0-09e2-417e-88a7-bc58a5733e4f', title: 'PATENT_TITLE_8037' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App