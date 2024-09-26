import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'c4916e9b-f5ff-4398-8e22-a2c1e55deff0', title: 'PATENT_TITLE_6699' },
            { id: 'e002feca-8218-49d2-b4bd-3e41e56e7610', title: 'PATENT_TITLE_3552' },
            { id: 'ef79f934-fb49-4758-9092-2754423a868c', title: 'PATENT_TITLE_3874' },
            { id: '41ca8782-4f01-4336-af3c-722b46da323c', title: 'PATENT_TITLE_2705' },
            { id: '3c82b49f-d4ff-4bc7-8d2f-060a6a9401ea', title: 'PATENT_TITLE_6875' },
            { id: '415b5186-382b-45ce-b78c-40cdf8a2c442', title: 'PATENT_TITLE_7977' },
            { id: '6e013b01-72c6-4614-a358-1c99313b6f31', title: 'PATENT_TITLE_3852' },
            { id: '9ceed009-aca9-4629-b9aa-2a4be1cda6ac', title: 'PATENT_TITLE_3241' },
            { id: 'c2bf25c8-e86e-48f3-9617-d0c40eec5986', title: 'PATENT_TITLE_8029' },
        ]}
    />
)

export default App