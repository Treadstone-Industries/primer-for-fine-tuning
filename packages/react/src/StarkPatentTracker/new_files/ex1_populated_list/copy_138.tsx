import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a5465f3a-cb19-47d8-909d-895eb7d34160', title: 'PATENT_TITLE_5083' },
            { id: 'cbbd65f4-4639-4e39-bd90-d8b8b0226128', title: 'PATENT_TITLE_2918' },
            { id: '83c5319a-f89a-4eda-b9f1-727ac06b1b89', title: 'PATENT_TITLE_6709' },
            { id: '7bc32416-f266-4fc9-9a7d-fd3e1c9f4be0', title: 'PATENT_TITLE_4690' },
            { id: 'f74d83e1-7615-4058-9fa5-3657f3fa8e1a', title: 'PATENT_TITLE_1637' },
            { id: '2fc59800-6117-4b0c-9db1-69b711aa6b70', title: 'PATENT_TITLE_7006' },
            { id: '59eab3bd-b707-49f1-8e33-b3ff12e8fa95', title: 'PATENT_TITLE_3572' },
            { id: '8706d7c8-70ac-4ef6-9379-3ff40c977371', title: 'PATENT_TITLE_6565' },
            { id: '23ed68af-9749-4474-b80e-1dc8321ac773', title: 'PATENT_TITLE_5753' },
        ]}
    />
)

export default App