import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'cab5ce70-f8b3-4dbe-a37d-6ac32996cd6a', title: 'PATENT_TITLE_1474' },
            { id: '54483004-5908-4da2-bab0-9b1f8a6639cf', title: 'PATENT_TITLE_2945' },
            { id: '8c78536e-5d99-47b2-afee-bc5bc094030a', title: 'PATENT_TITLE_1449' },
            { id: 'e1922ff8-7033-4683-a067-07ed547de037', title: 'PATENT_TITLE_1388' },
            { id: 'eb7cb7d1-39dd-41cc-a8d5-6068d0909bdd', title: 'PATENT_TITLE_8882' },
            { id: '6459cd8e-ce74-43f3-bc32-1d8590fe9b15', title: 'PATENT_TITLE_5226' },
            { id: '62453863-51de-4e52-a250-b5d671a9b455', title: 'PATENT_TITLE_5588' },
            { id: '72c87994-ec70-46b4-9ae5-0e99eed38b0d', title: 'PATENT_TITLE_4540' },
            { id: '348c1182-1d63-42dd-9a27-1a9b0cadf3dc', title: 'PATENT_TITLE_8507' },
        ]}
    />
)

export default App