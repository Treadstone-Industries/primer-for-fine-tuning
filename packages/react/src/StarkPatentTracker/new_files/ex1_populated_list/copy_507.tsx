import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c5bce0f0-25f5-44fa-8b2c-d64405059fd9', title: 'PATENT_TITLE_3933' },
            { id: 'dce97839-b5a0-48e7-b941-31bdae9f3b41', title: 'PATENT_TITLE_3412' },
            { id: '4cba7792-ae1f-47ce-8185-2bd5a775c485', title: 'PATENT_TITLE_2061' },
            { id: '31873ee9-8e37-413a-8b55-2091fdc3eba4', title: 'PATENT_TITLE_6058' },
            { id: 'f917673a-0f4e-4160-ac55-a70e85fbf8c8', title: 'PATENT_TITLE_3694' },
            { id: '9b7117dd-f566-4591-82de-a1da78bab243', title: 'PATENT_TITLE_2472' },
        ]}
    />
)

export default App