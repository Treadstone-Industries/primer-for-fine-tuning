import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e9192093-7422-42ca-b255-40b6c59ad1ef', title: 'PATENT_TITLE_2412' },
            { id: '6d5e84f5-0f75-4d21-b871-54cb53343560', title: 'PATENT_TITLE_2625' },
            { id: 'ba548fdd-81f5-4478-a462-163254b5fa7e', title: 'PATENT_TITLE_9503' },
            { id: 'ec0ea818-f82b-4920-a5a2-89940020e80a', title: 'PATENT_TITLE_9112' },
            { id: 'fc0b18ba-342d-4a3d-83a2-c76888edd13f', title: 'PATENT_TITLE_4479' },
            { id: 'd3fc07b3-5023-45d0-b9b7-799a4c8cfed9', title: 'PATENT_TITLE_9511' },
            { id: '6d64efda-5373-40cb-92b5-7001cfb23475', title: 'PATENT_TITLE_5508' },
            { id: '97c54bf6-000c-4d9c-b37b-7a1fc3a4ec43', title: 'PATENT_TITLE_6398' },
            { id: '7ba170fa-b632-4381-8773-feeb3f7f9020', title: 'PATENT_TITLE_3865' },
            { id: 'c700e1a5-a30f-4d5a-ab50-b9235d6108ff', title: 'PATENT_TITLE_4968' },
        ]}
    />
)

export default App