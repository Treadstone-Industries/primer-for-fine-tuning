import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '389a2518-1688-427a-85d7-ac5171de21db', title: 'PATENT_TITLE_9229' },
            { id: '4189d31d-9318-4873-b3c1-51531384a199', title: 'PATENT_TITLE_2264' },
            { id: 'd5de1978-ef6e-40f7-8145-88968983232d', title: 'PATENT_TITLE_3383' },
        ]}
    />
)

export default App