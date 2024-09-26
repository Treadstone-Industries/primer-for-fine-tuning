import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a5576402-1c62-4608-9559-15f8a110fe5f', title: 'PATENT_TITLE_6534' },
            { id: '6db15c6c-64d8-42e7-ad7a-c4ac5f109576', title: 'PATENT_TITLE_1507' },
            { id: 'a9adafa8-a0e7-4869-aec7-37544ca0935c', title: 'PATENT_TITLE_8843' },
            { id: 'e5f3b037-0d02-4f6a-9e3b-4301bd4c64a9', title: 'PATENT_TITLE_3585' },
        ]}
    />
)

export default App