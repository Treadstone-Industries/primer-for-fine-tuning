import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3c644354-09b2-4ecc-a323-920be24caa56', title: 'PATENT_TITLE_4766' },
        { id: 'e3025bf6-aa76-47d0-87da-ff96085569ae', title: 'PATENT_TITLE_6640' },
        { id: 'd686a851-4775-481e-8d25-100e2afb78c0', title: 'PATENT_TITLE_1412' },
        { id: '3d8e164c-2e08-4f7f-9256-45d820ec2a73', title: 'PATENT_TITLE_3935' },
        { id: 'a3399efd-1ce9-4c2e-88ed-e2b6c9108556', title: 'PATENT_TITLE_9447' },
        { id: 'c572f55d-10aa-41f1-b4f5-00d996d8f20f', title: 'PATENT_TITLE_5872' },
        { id: '7569228e-40e3-4a5b-bcf5-a688c40d36f3', title: 'PATENT_TITLE_4370' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App