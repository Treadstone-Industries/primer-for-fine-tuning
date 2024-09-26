import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'f033f3de-8f87-441a-98f6-dc2ee5f20954', title: 'PATENT_TITLE_7919' },
            { id: 'b45de43b-7e96-48ac-8f30-93990b830c6b', title: 'PATENT_TITLE_7348' },
        ]}
    />
)

export default App