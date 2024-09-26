import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e09ec5f8-8a3b-45f9-b973-753e615b273b', title: 'PATENT_TITLE_6366' },
            { id: 'b77bb951-cc8c-4cb1-896c-4b04e28ac8f7', title: 'PATENT_TITLE_4833' },
            { id: '77a55ef5-ce13-4021-9d39-dab860551ded', title: 'PATENT_TITLE_3169' },
            { id: 'aca53ffd-67a2-486c-a53e-a8cefbed6dd8', title: 'PATENT_TITLE_4989' },
        ]}
    />
)

export default App