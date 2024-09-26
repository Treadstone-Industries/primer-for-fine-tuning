import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'be5e2175-5985-4dca-9f8e-86b8926efffe', title: 'PATENT_TITLE_6866' },
        { id: '3d87cabc-0ade-4c4d-8c90-9d49cb6486f4', title: 'PATENT_TITLE_1398' },
        { id: '154f7e2b-ee22-41df-b33d-7b8b12d03aba', title: 'PATENT_TITLE_9393' },
        { id: 'a44aec5f-92fd-4fdd-9490-9dde7ec23496', title: 'PATENT_TITLE_5818' },
        { id: '675c8703-9910-4456-9a40-0ac3ee994a13', title: 'PATENT_TITLE_2725' },
        { id: '9f157b59-aadf-477c-b366-13226649f4d8', title: 'PATENT_TITLE_2561' },
        { id: '16831afd-7528-4228-8de9-0fa86d2ef2f6', title: 'PATENT_TITLE_8416' },
        { id: 'f6cb9f47-8320-4109-8fb7-778396e7e7e8', title: 'PATENT_TITLE_3324' },
        { id: '5d0866a3-9cd5-4c3d-8716-d31242b6dd91', title: 'PATENT_TITLE_5200' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App