import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '192e19ce-a02b-4bc7-9522-5563145cb999', title: 'PATENT_TITLE_5825' },
            { id: '95213f30-bfa4-43fb-ba7b-74428d89c4cd', title: 'PATENT_TITLE_5995' },
            { id: 'ad8be06b-0b8e-45b0-8b73-e3bb220e246a', title: 'PATENT_TITLE_1811' },
            { id: '956dfc63-33ee-40a0-9cfd-6572b3fdfdaa', title: 'PATENT_TITLE_5373' },
            { id: 'ef60120c-3fc7-4b2d-868c-d540e5aed186', title: 'PATENT_TITLE_9520' },
            { id: '1e15a1d2-55ef-415a-9266-49c14c5a096d', title: 'PATENT_TITLE_9344' },
            { id: 'e029191b-9bd9-4f29-83e0-91604617e683', title: 'PATENT_TITLE_2848' },
            { id: '358a9646-2687-48ce-b777-b2cb049f3784', title: 'PATENT_TITLE_7129' },
            { id: '918cf575-9905-4249-aba5-0e08915b1b79', title: 'PATENT_TITLE_7006' },
            { id: '05ba2b0f-8e32-452f-82ca-f518b48ffee6', title: 'PATENT_TITLE_9439' },
        ]}
    />
)

export default App