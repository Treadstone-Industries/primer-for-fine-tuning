import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e6b78438-2962-4602-af98-d8ca2ea3198a', title: 'PATENT_TITLE_8766' },
            { id: '069d3f69-887f-4377-a86e-dc144ce4877c', title: 'PATENT_TITLE_6714' },
            { id: '07f2fc79-dcd5-4b5a-aac9-cdabe221031f', title: 'PATENT_TITLE_8506' },
            { id: 'f037f75b-627b-4c7f-90de-313b7498915a', title: 'PATENT_TITLE_7423' },
            { id: 'ae659bb6-0056-47c9-b511-437759921005', title: 'PATENT_TITLE_8549' },
            { id: '5167996f-8efd-4e8b-84d0-3d25bfc9dfe3', title: 'PATENT_TITLE_1709' },
        ]}
    />
)

export default App