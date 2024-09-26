import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '3a4e9c88-4d82-4c5c-8456-fe63b403709b', title: 'PATENT_TITLE_1639' },
            { id: '1534a169-8806-47ac-be85-0f30a244abc0', title: 'PATENT_TITLE_2119' },
            { id: 'bbde2ca9-f6e3-42c6-b144-70f0ce7407b7', title: 'PATENT_TITLE_2047' },
            { id: 'b0f723a4-d8f6-4c44-a989-0f52e5fd70e3', title: 'PATENT_TITLE_7339' },
            { id: 'beaca0cc-4b40-474c-aa8b-09a92af4e80d', title: 'PATENT_TITLE_1663' },
            { id: '08bcfdad-2ab9-4300-a866-c2c3b0faa4bd', title: 'PATENT_TITLE_1521' },
            { id: '9db3d996-b13c-458b-83f4-a9ee74f570b9', title: 'PATENT_TITLE_9506' },
            { id: 'f44b5c98-c2ce-4dfa-ae52-497052e6c378', title: 'PATENT_TITLE_2400' },
            { id: 'dd64a220-37d0-476d-9bb5-7eecee395329', title: 'PATENT_TITLE_5384' },
        ]}
    />
)

export default App