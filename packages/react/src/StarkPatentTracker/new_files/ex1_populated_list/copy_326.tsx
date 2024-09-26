import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'e5beba49-124b-42b7-8768-4e244efa614c', title: 'PATENT_TITLE_7025' },
            { id: 'c2b908bc-a282-4dd0-a83e-cab19bfaf599', title: 'PATENT_TITLE_4904' },
            { id: 'a549c9a8-82cd-4400-b43b-121f5701823c', title: 'PATENT_TITLE_1091' },
            { id: '069d661b-227f-45cf-bb0d-535270a7369f', title: 'PATENT_TITLE_6455' },
            { id: '8222f1cd-6373-4c55-8145-23ab55717cd4', title: 'PATENT_TITLE_9443' },
            { id: '7fb92da6-576e-49d2-9705-6f0eb2540892', title: 'PATENT_TITLE_1727' },
        ]}
    />
)

export default App