import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c712910e-140e-4fc6-b7c5-24b1de642cc5', title: 'PATENT_TITLE_5491' },
            { id: 'f82b1802-63b1-4e47-b50d-e54f97869d0e', title: 'PATENT_TITLE_2577' },
            { id: '9297ddd6-ef51-400b-984c-019d9049d428', title: 'PATENT_TITLE_7307' },
            { id: '2c1d8910-9760-47a7-9217-f97150e404a3', title: 'PATENT_TITLE_3985' },
        ]}
    />
)

export default App