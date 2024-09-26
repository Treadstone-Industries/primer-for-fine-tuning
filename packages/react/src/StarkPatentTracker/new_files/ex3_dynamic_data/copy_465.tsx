import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '766aedf4-eaf5-485a-a23a-0f43aedbc559', title: 'PATENT_TITLE_8324' },
        { id: '5ba2260a-b0f0-432b-8e27-6835b1a433f6', title: 'PATENT_TITLE_3697' },
        { id: 'd35f8461-5825-41d3-876f-10ee5e536e89', title: 'PATENT_TITLE_9774' },
        { id: 'b5936f56-51b6-4591-b1ed-eb58531f73a4', title: 'PATENT_TITLE_4967' },
        { id: '89a66ac3-4c98-49b1-90e1-4cdb9a7a39cd', title: 'PATENT_TITLE_1565' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App