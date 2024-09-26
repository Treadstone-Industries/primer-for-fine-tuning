import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6d76c363-7909-4247-8c9c-604b89bb6b1f', title: 'PATENT_TITLE_2687' },
            { id: 'f45cbb63-db61-4dad-bfee-89481452aff3', title: 'PATENT_TITLE_1008' },
            { id: '99f37070-ba72-443a-8223-ef757e0e79c3', title: 'PATENT_TITLE_7372' },
        ]}
    />
)

export default App