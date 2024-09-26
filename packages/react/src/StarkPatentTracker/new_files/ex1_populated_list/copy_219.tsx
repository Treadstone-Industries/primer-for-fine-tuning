import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fa8618bf-b796-4066-9439-cfa2967220dc', title: 'PATENT_TITLE_4786' },
            { id: 'd040d892-113f-4d0c-861f-e12230e1db79', title: 'PATENT_TITLE_2369' },
            { id: 'e3d41aaa-7faa-4b3d-99d4-ea93950396af', title: 'PATENT_TITLE_8938' },
        ]}
    />
)

export default App