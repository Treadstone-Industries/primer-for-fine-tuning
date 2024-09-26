import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '93362da0-f900-47fe-8805-16b8b81a1cf9', title: 'PATENT_TITLE_4913' },
            { id: '3a509c94-a382-4c9d-9355-fd10b743916e', title: 'PATENT_TITLE_4183' },
            { id: '43198fba-b30f-467f-b7ee-1c7b0c5dbe2c', title: 'PATENT_TITLE_3117' },
            { id: 'b5f45e5c-2751-4865-acf0-46d7f10a3eaa', title: 'PATENT_TITLE_3919' },
            { id: 'e5e162bb-6dd9-4d5c-8faf-c8a32f04611e', title: 'PATENT_TITLE_5104' },
            { id: '16c55adf-8001-4940-89be-30b2e37af656', title: 'PATENT_TITLE_6528' },
        ]}
    />
)

export default App