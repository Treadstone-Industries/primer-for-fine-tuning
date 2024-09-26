import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4ef51ffb-8670-45b4-8a0e-2684c7b5f25f', title: 'PATENT_TITLE_2474' },
            { id: '057e4ba2-6c12-46bf-b529-80acd6bcd31e', title: 'PATENT_TITLE_7046' },
        ]}
    />
)

export default App