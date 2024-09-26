import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f8d9143e-38f2-4a73-b600-d8d6bbfd7e90', title: 'PATENT_TITLE_2695' },
            { id: 'ec955b25-13a7-437f-9a49-96e6a4856383', title: 'PATENT_TITLE_1748' },
            { id: '06d0c562-24b3-4aa1-a7db-04fbb536c19a', title: 'PATENT_TITLE_2249' },
            { id: '1aedf849-9a03-4035-85ab-d2e500d25829', title: 'PATENT_TITLE_2432' },
            { id: '11218a86-ec44-450a-9e58-20fb6be70e1c', title: 'PATENT_TITLE_2042' },
        ]}
    />
)

export default App