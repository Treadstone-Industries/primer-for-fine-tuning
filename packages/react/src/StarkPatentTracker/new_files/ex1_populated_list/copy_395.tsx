import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0dca5951-ac0a-4607-b51a-958711dacc84', title: 'PATENT_TITLE_4976' },
            { id: '67a07d19-d76a-4b39-ba29-7fc7d19bee6f', title: 'PATENT_TITLE_6713' },
        ]}
    />
)

export default App