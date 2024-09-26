import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '040b35ef-04df-47f7-a3ad-34b942a6453e', title: 'PATENT_TITLE_2533' },
        { id: 'b87387e0-fbe3-49e3-832f-6fbc3d0fdf91', title: 'PATENT_TITLE_6578' },
        { id: 'b99267e2-1695-4916-b9b4-863b2fed64d3', title: 'PATENT_TITLE_9109' },
        { id: 'a3739e01-0c83-440b-b58e-06219bbe477f', title: 'PATENT_TITLE_4062' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App