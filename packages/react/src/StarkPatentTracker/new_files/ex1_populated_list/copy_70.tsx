import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd4f1eaf7-d40f-4e97-ab1a-88aa66b66d07', title: 'PATENT_TITLE_7443' },
            { id: 'a3ce7794-70b0-4305-866a-415c8bed28f0', title: 'PATENT_TITLE_4189' },
            { id: '2147c28e-a446-4c85-a32b-2d1af69ad150', title: 'PATENT_TITLE_4603' },
            { id: '882a7113-5927-4e54-a665-d8e196dbacf7', title: 'PATENT_TITLE_1897' },
            { id: '43d74c84-d463-4fb2-be5d-6a6be93c49c2', title: 'PATENT_TITLE_5259' },
            { id: '751a1b01-1d8c-4dfc-a181-6d770b02a543', title: 'PATENT_TITLE_4886' },
        ]}
    />
)

export default App