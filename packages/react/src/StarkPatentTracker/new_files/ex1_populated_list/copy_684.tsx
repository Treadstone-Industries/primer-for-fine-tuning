import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '9954d632-1d14-409f-a3cf-0cb39383042c', title: 'PATENT_TITLE_2966' },
            { id: '362d95ec-69b6-4e41-9a78-9c4997fe89d8', title: 'PATENT_TITLE_5133' },
            { id: '45094157-a5e9-4531-a612-5e9c3c4412aa', title: 'PATENT_TITLE_9346' },
            { id: '10c1de1a-aed8-4a57-8eb3-3c3c95d797a4', title: 'PATENT_TITLE_1306' },
        ]}
    />
)

export default App