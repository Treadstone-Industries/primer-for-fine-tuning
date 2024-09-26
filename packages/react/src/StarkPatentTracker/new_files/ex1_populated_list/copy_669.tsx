import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '01c13518-6575-4f85-a156-5951e7f07d91', title: 'PATENT_TITLE_2826' },
            { id: '075decd9-866e-41bc-8d13-b1102cc8a22f', title: 'PATENT_TITLE_7020' },
            { id: '0ca13b61-3b04-477c-9f7f-d33380707aaf', title: 'PATENT_TITLE_9273' },
            { id: '7d2c4bb0-6a74-4a68-aa12-f9aa22c9ab62', title: 'PATENT_TITLE_6818' },
            { id: '1d708707-cd47-4d80-8731-32e08b96b746', title: 'PATENT_TITLE_8445' },
            { id: 'aacb9c69-8318-4245-94ea-cc6a57eb8794', title: 'PATENT_TITLE_3356' },
        ]}
    />
)

export default App