import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3a3a1aec-0d36-49e3-b968-8cc3e355a48e', title: 'PATENT_TITLE_3668' },
            { id: 'c40d76ec-3ca8-449e-84a8-c37ba502bf19', title: 'PATENT_TITLE_1546' },
            { id: 'a490ea59-c327-4642-8527-7ac0cbca4707', title: 'PATENT_TITLE_4544' },
            { id: '72bdd158-33ff-435d-a3ae-738a37090e77', title: 'PATENT_TITLE_8578' },
            { id: 'bc65d9cd-2dbc-42cc-80c9-402deedead69', title: 'PATENT_TITLE_9272' },
        ]}
    />
)

export default App