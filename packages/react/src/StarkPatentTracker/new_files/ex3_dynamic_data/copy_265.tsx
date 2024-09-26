import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3bd61d9d-4c02-4d33-8b9b-9ce09b372394', title: 'PATENT_TITLE_9572' },
        { id: 'b7759352-119d-4879-89cf-c84ac2afc98a', title: 'PATENT_TITLE_9832' },
        { id: '75a93028-dbe0-45e9-bdec-3ee3a7637f28', title: 'PATENT_TITLE_7589' },
        { id: '2cfe26e1-3481-4e1e-97eb-ce256c19f366', title: 'PATENT_TITLE_2033' },
        { id: '28aa7034-8894-4982-9bd1-ee95ebccb12e', title: 'PATENT_TITLE_1360' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App