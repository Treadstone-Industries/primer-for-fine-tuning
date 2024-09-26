import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '23d517a1-099e-45c6-b9a2-114c325fe872', title: 'PATENT_TITLE_3634' },
        { id: '1a778506-30e1-4414-ae6d-09215fb707e2', title: 'PATENT_TITLE_2791' },
        { id: '993b0fb6-d47c-427a-9807-9b554baf9d3d', title: 'PATENT_TITLE_3773' },
        { id: '48b455be-e44d-41f1-bcb5-e5ed755e6198', title: 'PATENT_TITLE_3001' },
        { id: '592bf29d-23f1-48b2-b905-b8980bd5515f', title: 'PATENT_TITLE_2810' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App