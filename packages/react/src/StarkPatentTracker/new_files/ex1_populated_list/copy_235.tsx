import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c1399f91-983d-435a-bfeb-7fdbc37bdf48', title: 'PATENT_TITLE_2328' },
            { id: '50e32c03-08bc-4d48-8066-3c09964f23ea', title: 'PATENT_TITLE_5885' },
            { id: 'cc1d35e8-ef16-4482-ab9c-eeacdebd36a9', title: 'PATENT_TITLE_5182' },
        ]}
    />
)

export default App