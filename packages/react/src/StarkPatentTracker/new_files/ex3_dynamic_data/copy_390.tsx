import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '984d658e-cb98-4ba1-a9cf-508e49e26043', title: 'PATENT_TITLE_3026' },
        { id: 'fd7de4fe-c302-4393-abfc-358a4be80ae1', title: 'PATENT_TITLE_5366' },
        { id: 'df1b34e1-af44-4a72-8da1-7c81441c7827', title: 'PATENT_TITLE_8796' },
        { id: 'd560aefc-ec56-45f6-8ca7-747146b79bf9', title: 'PATENT_TITLE_7088' },
        { id: '6126a9c6-c861-49c5-baf2-e8f12e48ca95', title: 'PATENT_TITLE_8672' },
        { id: '6328aff0-d56e-4b89-b531-be13fcf260da', title: 'PATENT_TITLE_5196' },
        { id: 'adc31fc4-5041-4a6f-baaa-1842471a8f82', title: 'PATENT_TITLE_3155' },
        { id: '5d032989-b316-4cff-becc-9545d3b64f0c', title: 'PATENT_TITLE_2629' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App