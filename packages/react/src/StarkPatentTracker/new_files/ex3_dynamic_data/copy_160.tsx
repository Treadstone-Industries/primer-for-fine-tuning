import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8fb07fa8-dde8-45f0-88c3-af620e10366a', title: 'PATENT_TITLE_2188' },
        { id: '14903041-34d3-4a51-9c0d-d0d1de52ab92', title: 'PATENT_TITLE_7897' },
        { id: 'd92a04db-87a6-45dc-b6cf-db09bd84331b', title: 'PATENT_TITLE_6936' },
        { id: 'c23d4ced-e547-4598-8c8d-dd5d61395018', title: 'PATENT_TITLE_7794' },
        { id: 'ff466ef9-68dc-4d25-82d0-081dcf52e557', title: 'PATENT_TITLE_8942' },
        { id: 'ceb276ad-6d4a-4477-9a99-0cbfdbd082dc', title: 'PATENT_TITLE_2330' },
        { id: '41369bd2-9444-4c45-9a38-eb3265a23023', title: 'PATENT_TITLE_9304' },
        { id: '306150af-5961-42d8-9ee2-d8a1f8e2f385', title: 'PATENT_TITLE_9320' },
        { id: '0a2bad9b-81bd-434d-a845-4fbeec5422a4', title: 'PATENT_TITLE_7023' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App