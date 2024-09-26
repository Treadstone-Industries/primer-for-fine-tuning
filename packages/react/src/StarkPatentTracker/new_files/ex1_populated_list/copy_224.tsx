import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '60932f3f-cdce-456d-b476-a3d6cdfcdaeb', title: 'PATENT_TITLE_1486' },
            { id: '1c3237dd-d53f-43ec-88ef-5b84253b47bf', title: 'PATENT_TITLE_2983' },
            { id: '71502e6c-aec4-45fa-97c8-34feef8263dc', title: 'PATENT_TITLE_4101' },
        ]}
    />
)

export default App