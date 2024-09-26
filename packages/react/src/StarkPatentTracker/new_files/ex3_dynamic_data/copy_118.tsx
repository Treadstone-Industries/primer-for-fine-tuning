import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '25194041-0aed-4bac-9716-ca3466d8f658', title: 'PATENT_TITLE_4726' },
        { id: '8a9cd935-1459-410d-beb7-faeca957af27', title: 'PATENT_TITLE_8441' },
        { id: '0c501e67-c425-4c7f-8165-0695857c38bf', title: 'PATENT_TITLE_4119' },
        { id: 'cc8d03d3-9bae-40f4-9f97-818948587d0c', title: 'PATENT_TITLE_9884' },
        { id: 'f6668c98-3341-4762-a060-3fdd7aa305c9', title: 'PATENT_TITLE_2734' },
        { id: 'd8606445-1b5f-4880-986a-cc8900abacfe', title: 'PATENT_TITLE_3221' },
        { id: '431969d2-a651-45bd-9374-61ba6ce1253d', title: 'PATENT_TITLE_9155' },
        { id: '230039eb-a41f-4695-b54e-f749de6056bb', title: 'PATENT_TITLE_7472' },
        { id: '3e1a1a72-ba2d-41cb-a08f-bfeb70cd9c5c', title: 'PATENT_TITLE_9990' },
        { id: '6d5a70bc-70a5-4007-87d7-65eb80849db5', title: 'PATENT_TITLE_4993' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App