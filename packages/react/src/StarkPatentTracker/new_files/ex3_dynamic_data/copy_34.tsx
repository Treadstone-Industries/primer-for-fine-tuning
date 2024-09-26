import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '4aa9fbf0-508b-485f-8437-46db9dc0a622', title: 'PATENT_TITLE_1544' },
        { id: 'cdde964e-e173-4ce6-a2c5-c52a1982eda7', title: 'PATENT_TITLE_2122' },
        { id: 'd6929fbb-092c-41eb-b9ab-c08deb4c3a14', title: 'PATENT_TITLE_5922' },
        { id: 'd045996b-3c43-4e00-8cd9-45d6d587c696', title: 'PATENT_TITLE_6466' },
        { id: '995b10d4-9c2e-40c8-bd54-c836b5785308', title: 'PATENT_TITLE_4770' },
        { id: 'ef20c6af-ef21-4537-bffb-e0768ff179f2', title: 'PATENT_TITLE_4551' },
        { id: '8c546e51-20f9-4db6-8806-520c472b11d2', title: 'PATENT_TITLE_9102' },
        { id: '2ddf099a-ae54-4210-9889-428445944e46', title: 'PATENT_TITLE_5558' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App