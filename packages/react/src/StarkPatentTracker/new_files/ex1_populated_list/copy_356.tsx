import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'd9f13a69-eddd-4096-bada-f283a8051b6f', title: 'PATENT_TITLE_7287' },
            { id: '06d64959-acac-463d-9c1f-f0c7c0da1ae3', title: 'PATENT_TITLE_1505' },
            { id: '8965ca29-8b53-46b7-acfb-fd7e389b2cc3', title: 'PATENT_TITLE_8221' },
            { id: 'c9471fb7-62af-41c0-a4ba-b84254681fd0', title: 'PATENT_TITLE_2490' },
            { id: 'adae6d29-c775-4a84-96f2-0985e7dde75d', title: 'PATENT_TITLE_9617' },
            { id: '2ee5eb12-646f-4b2e-8e9a-c819aadd7487', title: 'PATENT_TITLE_5684' },
            { id: '6d147d37-d975-44be-a1fb-33b815836b34', title: 'PATENT_TITLE_8111' },
            { id: '6d1b4d52-6eed-412f-a53c-81b53a4a25a9', title: 'PATENT_TITLE_6100' },
        ]}
    />
)

export default App