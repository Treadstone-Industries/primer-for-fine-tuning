import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '970dea00-f60f-454f-b662-cc0ad906afa2', title: 'PATENT_TITLE_5959' },
            { id: '394c3b57-4142-4a2d-865d-437a78920ce6', title: 'PATENT_TITLE_7805' },
            { id: '4a4ce671-3ac9-4e15-90be-81ff4afc0137', title: 'PATENT_TITLE_4679' },
            { id: '3e18cbf4-2527-4c29-8beb-f283b0a092e8', title: 'PATENT_TITLE_2941' },
            { id: '0acfd904-2343-43fc-a596-2fe2797f755a', title: 'PATENT_TITLE_4270' },
            { id: 'a085eb2b-1997-4007-a61d-82da3d9fa6ed', title: 'PATENT_TITLE_2188' },
            { id: '35b481b3-a68b-4be7-80b9-2d90d56a9860', title: 'PATENT_TITLE_4160' },
        ]}
    />
)

export default App