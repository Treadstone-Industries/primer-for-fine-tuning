import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8fe15d5a-6f5f-4b4d-9868-0a07fb31db9b', title: 'PATENT_TITLE_4209' },
            { id: '035877b2-2f02-4e81-8a84-aed84eae25a4', title: 'PATENT_TITLE_2165' },
            { id: '3a3b42f0-19ba-4892-8cb1-501e9a10f00d', title: 'PATENT_TITLE_5696' },
            { id: 'a01b0585-21b1-4efb-96a4-30b53d123ac5', title: 'PATENT_TITLE_3183' },
            { id: '12df558e-fd0f-47e0-8df2-5a90a4e9d518', title: 'PATENT_TITLE_3491' },
            { id: '392eb817-690c-4bee-980b-9e45348f22e0', title: 'PATENT_TITLE_6368' },
            { id: '94f4a29a-ca5c-4232-967c-d418b69074e2', title: 'PATENT_TITLE_7094' },
            { id: '006ade60-985e-4ee0-9702-cc67cee96fa6', title: 'PATENT_TITLE_1680' },
        ]}
    />
)

export default App