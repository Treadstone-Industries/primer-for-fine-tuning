import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '155a27b6-3035-44ae-9e4d-444b189196ce', title: 'PATENT_TITLE_7615' },
            { id: '9789d545-26d9-4e38-bcd8-43bb60c7c6bc', title: 'PATENT_TITLE_4055' },
            { id: '4141faeb-5d47-4634-8451-cdde305a1b42', title: 'PATENT_TITLE_4806' },
            { id: 'ac419db0-1a68-4554-b4a6-cafbf868e746', title: 'PATENT_TITLE_8545' },
            { id: '189a69f0-ac56-457f-bdbf-3402c039005d', title: 'PATENT_TITLE_8150' },
        ]}
    />
)

export default App