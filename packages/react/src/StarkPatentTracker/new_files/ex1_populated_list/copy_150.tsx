import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f275c48b-eec5-4da8-814e-171ac5e6fe56', title: 'PATENT_TITLE_9531' },
            { id: '48203f97-26d4-4b0d-96d5-ae0e9c374e1f', title: 'PATENT_TITLE_7907' },
            { id: '72d91766-645e-4deb-abbc-131bf6a61800', title: 'PATENT_TITLE_7695' },
            { id: '9f4a0dd4-b36f-46fc-a17c-d9b920b81f7d', title: 'PATENT_TITLE_6541' },
            { id: '7f8f93a6-2af6-4d28-a62f-7900d094ccae', title: 'PATENT_TITLE_7865' },
        ]}
    />
)

export default App