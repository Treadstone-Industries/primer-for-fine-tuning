import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '91c884dc-67f7-4fa1-9432-00820ac6f6a5', title: 'PATENT_TITLE_2962' },
            { id: 'ed97006d-7192-4f22-93ce-487ccf4f2c49', title: 'PATENT_TITLE_8557' },
            { id: '2b108e3e-0c4f-4d32-ae4f-a7fb7f4facb9', title: 'PATENT_TITLE_7856' },
            { id: '3a18626c-b8b6-41cc-812f-f3d27650ebc8', title: 'PATENT_TITLE_3699' },
            { id: 'e4587119-e8dc-4088-afa1-cf05c1af530e', title: 'PATENT_TITLE_6744' },
        ]}
    />
)

export default App