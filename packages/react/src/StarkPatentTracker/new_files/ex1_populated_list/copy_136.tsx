import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cff5a4a9-eeb7-4b99-9db7-25fa3a3f051c', title: 'PATENT_TITLE_8105' },
            { id: 'e83f3c92-a185-4f1f-a11d-e0d0943f8793', title: 'PATENT_TITLE_4236' },
            { id: 'd7138d11-b87b-48a0-b1bc-de47455b8711', title: 'PATENT_TITLE_6055' },
            { id: '0293955f-9b8c-4083-876b-b4dff5dcdc08', title: 'PATENT_TITLE_8723' },
            { id: '0c016d6e-6709-4220-91fa-0c9e74b12b7d', title: 'PATENT_TITLE_9863' },
            { id: '00359adb-5b05-4278-b859-663045c21dfb', title: 'PATENT_TITLE_8126' },
            { id: '99bde1aa-05f6-4b44-945a-af021b936bcf', title: 'PATENT_TITLE_1450' },
            { id: 'f6e26060-ff37-47bb-a077-1889bb47007b', title: 'PATENT_TITLE_9279' },
            { id: '65ba209e-d6d1-4409-854b-ca1464bf479a', title: 'PATENT_TITLE_9470' },
        ]}
    />
)

export default App