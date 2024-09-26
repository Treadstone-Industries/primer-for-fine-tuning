import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '0a8a6aba-85e3-485d-b1b4-c8a898b84d33', title: 'PATENT_TITLE_5380' },
            { id: '9aa7857e-0992-4dd1-99f9-e2e7b1078dea', title: 'PATENT_TITLE_7020' },
            { id: '419ee598-6d3a-47bc-9242-3a2afd519132', title: 'PATENT_TITLE_2471' },
            { id: 'eb9c1710-6002-4a7a-b743-215c7b4390d4', title: 'PATENT_TITLE_7343' },
            { id: '275f3c3d-c9ca-49cc-9c42-a1534bfb3166', title: 'PATENT_TITLE_5894' },
            { id: '71cdd060-c684-4b94-a1ee-06c2038ae981', title: 'PATENT_TITLE_9537' },
            { id: '529e575d-491d-44bb-a279-2280dbd9f1c9', title: 'PATENT_TITLE_9321' },
            { id: '8c2c3283-3c43-4ed1-94fb-b694554f4129', title: 'PATENT_TITLE_2872' },
        ]}
    />
)

export default App