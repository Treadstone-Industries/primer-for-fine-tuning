import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a4454ee9-9f66-401a-b72d-7b5452c22c63', title: 'PATENT_TITLE_1532' },
            { id: '4faf3fcf-c93e-481e-a5b4-99288f27a4cb', title: 'PATENT_TITLE_9500' },
            { id: '74dd37d5-f734-4987-828c-b074e483eecf', title: 'PATENT_TITLE_4801' },
            { id: 'f6b67faf-d871-49c8-9caf-47a442ca4de9', title: 'PATENT_TITLE_6626' },
            { id: '453cdef6-2935-4dde-badd-81264dafd6d1', title: 'PATENT_TITLE_2937' },
        ]}
    />
)

export default App