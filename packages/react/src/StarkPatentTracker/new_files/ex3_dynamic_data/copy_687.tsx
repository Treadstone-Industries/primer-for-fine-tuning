import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '77e7879c-47e8-4998-89c0-07c77e4722d7', title: 'PATENT_TITLE_1463' },
        { id: '7254a7ff-e086-4864-94f6-e25e2f66b434', title: 'PATENT_TITLE_9716' },
        { id: '67a462ff-3aac-43fc-b9c4-7e1181a76a7d', title: 'PATENT_TITLE_6862' },
        { id: 'c1da15d1-cedc-40b0-88a3-8d3fd1c15857', title: 'PATENT_TITLE_5936' },
        { id: '7f00be6e-b52e-4685-9640-3e64efddfd67', title: 'PATENT_TITLE_5748' },
        { id: '84a627c1-1a8d-4f49-bc4a-60fa06ba9737', title: 'PATENT_TITLE_7028' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App