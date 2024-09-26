import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a44d2986-3eca-4f21-b4e4-2db4c13ad1a9', title: 'PATENT_TITLE_4913' },
            { id: '2d9236e4-3306-46d2-9a5d-32582f539ba5', title: 'PATENT_TITLE_7497' },
            { id: 'c77255bb-aec3-4335-8e1e-448769a34059', title: 'PATENT_TITLE_2037' },
        ]}
    />
)

export default App