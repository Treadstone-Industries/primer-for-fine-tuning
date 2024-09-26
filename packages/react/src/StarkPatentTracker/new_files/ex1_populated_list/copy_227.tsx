import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3fae11ab-e381-48ab-936c-d3c838076830', title: 'PATENT_TITLE_1530' },
            { id: 'cbd73258-1487-43fd-8007-4128b2af9554', title: 'PATENT_TITLE_5791' },
        ]}
    />
)

export default App