import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e62e9b3f-f935-4164-ae9b-575eb057d738', title: 'PATENT_TITLE_1079' },
        { id: '1d03085f-a64b-4bf6-9c37-b257838b6af0', title: 'PATENT_TITLE_5096' },
        { id: '83355516-fea8-4b5d-9bbf-a51c19b95915', title: 'PATENT_TITLE_7512' },
        { id: 'd63c04a4-8372-4029-8ec9-07e0bfcfe95c', title: 'PATENT_TITLE_5675' },
        { id: '7c20a0b8-8a16-4196-93f7-7054b57ed22a', title: 'PATENT_TITLE_6123' },
        { id: '670a75af-e8a7-4528-aed9-98de57b8552b', title: 'PATENT_TITLE_6877' },
        { id: '0933427c-3e3f-4fb6-b89f-d993c7a4614c', title: 'PATENT_TITLE_9311' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App