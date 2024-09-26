import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'bacb02e0-fadf-4fc6-920c-fee3c4c2a16a', title: 'PATENT_TITLE_7919' },
        { id: '540cd056-a6dc-43d6-8a3d-9cce6d82bdba', title: 'PATENT_TITLE_9773' },
        { id: '42526d4e-485f-4135-b836-272ca6cabb05', title: 'PATENT_TITLE_3687' },
        { id: '63029425-0b48-40b0-896a-f6ccc5782f0b', title: 'PATENT_TITLE_6973' },
        { id: '28c83028-4268-46a7-9c30-de0ebd4d2d39', title: 'PATENT_TITLE_2351' },
        { id: '5b2e12fe-06fb-460d-bc5e-05d80f3a688d', title: 'PATENT_TITLE_5874' },
        { id: 'b787c078-217a-4c4c-ac27-bb2470920e27', title: 'PATENT_TITLE_6045' },
        { id: '1d83b64c-7f4a-4cc1-b31c-5f4a88a2c861', title: 'PATENT_TITLE_2985' },
        { id: '190e84d3-cd15-48b0-9096-1598e68104c5', title: 'PATENT_TITLE_9492' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App