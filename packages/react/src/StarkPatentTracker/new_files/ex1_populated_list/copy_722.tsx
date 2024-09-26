import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd8a92f55-f813-4511-ae45-e75165254bf1', title: 'PATENT_TITLE_3770' },
            { id: '4059a629-3c89-47f5-a306-1608fb84db9f', title: 'PATENT_TITLE_1030' },
            { id: 'c4ab3c2a-c107-4d2b-96f9-698407370233', title: 'PATENT_TITLE_9742' },
            { id: '46956056-47cf-4186-921f-53eeaeb405e5', title: 'PATENT_TITLE_9141' },
            { id: '16fd4aa3-6d17-4ec4-b66c-8f43b9db5edd', title: 'PATENT_TITLE_3629' },
            { id: 'f73845d6-032d-41eb-85ea-23c2a11f383a', title: 'PATENT_TITLE_4385' },
            { id: 'aa975b13-8ff1-4ac4-8c14-21fb6f719208', title: 'PATENT_TITLE_4211' },
            { id: '75af0a53-e223-4906-aa11-20de9e9a9489', title: 'PATENT_TITLE_1173' },
        ]}
    />
)

export default App