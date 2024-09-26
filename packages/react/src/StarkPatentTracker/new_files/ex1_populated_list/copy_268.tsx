import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cde3b8a3-9c2a-44a3-b5e1-ef67f0718c0f', title: 'PATENT_TITLE_4288' },
            { id: '7c32c794-5480-4190-b7db-5369b4b1efbb', title: 'PATENT_TITLE_3902' },
            { id: 'de301067-5363-4cb2-929d-11faaa573f55', title: 'PATENT_TITLE_2426' },
            { id: 'ad8fa43d-c539-4ff9-9ea7-fb26a902cc0c', title: 'PATENT_TITLE_5282' },
            { id: '36fa8e63-3707-4fa7-928b-1eb84e83e46e', title: 'PATENT_TITLE_4879' },
            { id: '8770f25d-e030-4ec1-a8bd-8503f7ec9d61', title: 'PATENT_TITLE_1110' },
            { id: 'e74923c4-d6e7-432d-a29b-4bcd19444b0c', title: 'PATENT_TITLE_1627' },
            { id: 'd78ba17b-5993-43f9-819e-7f40511e22f2', title: 'PATENT_TITLE_3719' },
            { id: '850a4652-b47a-4b01-9723-398d5c790ef6', title: 'PATENT_TITLE_2802' },
            { id: 'a3e1738a-af70-4459-8686-bd6f778cba54', title: 'PATENT_TITLE_1278' },
        ]}
    />
)

export default App