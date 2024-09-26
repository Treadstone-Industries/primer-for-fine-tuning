import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bf8b08c9-4e11-4fc8-a3d4-ed81363725a6', title: 'PATENT_TITLE_9990' },
        { id: 'abce983a-1c0e-423d-ac08-155a4bfd67e5', title: 'PATENT_TITLE_5227' },
        { id: '11374052-9c31-4ba6-a218-847e0a4bec92', title: 'PATENT_TITLE_6334' },
        { id: '527d8c39-28b2-4788-be26-1e6dcfd1fc11', title: 'PATENT_TITLE_7730' },
        { id: '9b879e26-d5d0-4493-8712-f66a40f26892', title: 'PATENT_TITLE_6406' },
        { id: 'd1fe961c-6432-4c94-8459-36df3e194a3d', title: 'PATENT_TITLE_5915' },
        { id: '1242e184-16b3-40c7-ad73-246e1870b653', title: 'PATENT_TITLE_1749' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App