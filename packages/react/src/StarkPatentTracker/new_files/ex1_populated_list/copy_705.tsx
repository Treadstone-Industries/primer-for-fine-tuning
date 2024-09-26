import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9bbea7ff-ff66-40b1-a3f5-65cddbaa747c', title: 'PATENT_TITLE_2852' },
            { id: '30e767e5-5d09-40eb-990b-c69c711400e7', title: 'PATENT_TITLE_3560' },
            { id: '820f36af-9d69-4f47-b8ae-0ed8c244f3f9', title: 'PATENT_TITLE_4759' },
            { id: 'b4f61349-f48b-41e9-be95-31e5b581d39b', title: 'PATENT_TITLE_4544' },
            { id: '655af939-d345-4140-961f-7da62a44c3d2', title: 'PATENT_TITLE_7004' },
            { id: '8f88959d-b025-4124-8dea-89b8915a86c0', title: 'PATENT_TITLE_3657' },
        ]}
    />
)

export default App