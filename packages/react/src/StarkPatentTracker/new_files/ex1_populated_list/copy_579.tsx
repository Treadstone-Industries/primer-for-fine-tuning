import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b6bcf735-88bf-4a23-bf84-2027d592fbaa', title: 'PATENT_TITLE_3762' },
            { id: '54849ba5-4b6c-4c54-84df-8b39a910e3ea', title: 'PATENT_TITLE_4823' },
            { id: 'ab63c0cc-425e-4aab-ab41-e2638e22cb78', title: 'PATENT_TITLE_1226' },
        ]}
    />
)

export default App