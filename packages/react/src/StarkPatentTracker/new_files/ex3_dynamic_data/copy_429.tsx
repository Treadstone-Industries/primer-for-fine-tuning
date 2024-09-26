import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6ffd8cd6-eb5e-4b46-8e83-c23bb7b2e1a6', title: 'PATENT_TITLE_6246' },
        { id: 'e2a42481-caaf-4dd8-af78-b0ede1be4a52', title: 'PATENT_TITLE_3083' },
        { id: 'b31398e1-5ef9-4735-a236-a388e4aa2aa0', title: 'PATENT_TITLE_3615' },
        { id: 'e7370078-f607-49a0-ad90-e6324d5407fd', title: 'PATENT_TITLE_7287' },
        { id: '6e2891aa-0349-4548-87d5-e26244b86395', title: 'PATENT_TITLE_5199' },
        { id: '46fe8e0d-8e96-41db-8d63-ec8dd836147d', title: 'PATENT_TITLE_7213' },
        { id: '52006b6e-0d10-4c0e-99be-a59f6a8a24b7', title: 'PATENT_TITLE_2983' },
        { id: '1a4bfea4-f921-46e5-bd7a-b785d41ec241', title: 'PATENT_TITLE_3026' },
        { id: 'f382f61a-cfbe-4d88-82fa-ee82388f29da', title: 'PATENT_TITLE_2774' },
        { id: 'a8027a3d-c330-47d4-82ea-3dbb5971932f', title: 'PATENT_TITLE_3372' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App