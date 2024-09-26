import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'bdf72c08-7138-4672-942a-1977a7bfa171', title: 'PATENT_TITLE_3732' },
            { id: '3e988132-5c87-48c6-b703-54f998816142', title: 'PATENT_TITLE_3979' },
            { id: 'e2e70e7b-24b1-4908-881e-179f39ed4298', title: 'PATENT_TITLE_4404' },
            { id: '9cfa8365-f531-4c1e-bb80-68d9acfd5f48', title: 'PATENT_TITLE_3878' },
            { id: '2d51eb09-26c7-4f4b-8e63-0d2dea3bab10', title: 'PATENT_TITLE_6936' },
        ]}
    />
)

export default App