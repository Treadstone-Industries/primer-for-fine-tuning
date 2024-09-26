import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '5a43bcb5-75b6-4a59-8ae0-7f9c1ccc8962', title: 'PATENT_TITLE_3933' },
            { id: '0e13e03e-304b-42a4-86f6-96b053747128', title: 'PATENT_TITLE_1487' },
        ]}
    />
)

export default App