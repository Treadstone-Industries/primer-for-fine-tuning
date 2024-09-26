import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7eaf98a8-3b30-4db3-9398-fe84780b58c0', title: 'PATENT_TITLE_3443' },
        { id: 'd00ebf53-66f5-4f34-8628-3b85d3836b99', title: 'PATENT_TITLE_9015' },
        { id: '6b25432d-14c3-4005-9bde-299502d636ba', title: 'PATENT_TITLE_2882' },
        { id: 'b95a1bd2-6116-4692-a195-d809c27f17a8', title: 'PATENT_TITLE_2410' },
        { id: '98a0580e-1996-42d9-b844-79a2efa41039', title: 'PATENT_TITLE_3847' },
        { id: 'a8dd353c-1541-4f5d-9169-dcd47e5e9ed3', title: 'PATENT_TITLE_8546' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App