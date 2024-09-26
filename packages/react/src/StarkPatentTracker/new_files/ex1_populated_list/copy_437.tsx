import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '83dfd40e-3040-4601-9bab-fac290d5df2b', title: 'PATENT_TITLE_5748' },
            { id: 'aed58a36-0381-48fc-9e48-deded22e461e', title: 'PATENT_TITLE_8104' },
            { id: '7d32249d-8339-48f0-b3c2-ce064c117416', title: 'PATENT_TITLE_6785' },
            { id: '97d33e41-19d6-4d71-9d1e-5da745a2fded', title: 'PATENT_TITLE_8807' },
            { id: '8af83210-df6a-4354-b642-365c20db8822', title: 'PATENT_TITLE_5118' },
        ]}
    />
)

export default App