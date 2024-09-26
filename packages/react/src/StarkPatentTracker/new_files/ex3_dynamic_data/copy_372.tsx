import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0ac7c9da-5bf6-4966-b279-7b6b69cbd03d', title: 'PATENT_TITLE_4435' },
        { id: 'a8d20be0-59e7-4c8f-81de-4cac857a0c40', title: 'PATENT_TITLE_4744' },
        { id: 'd8362273-5e81-4964-89ff-caf7133eb223', title: 'PATENT_TITLE_3724' },
        { id: 'b7737010-3c98-463f-8333-f29e17cc8c60', title: 'PATENT_TITLE_4134' },
        { id: 'f7c7161c-9955-4d97-9a84-5f8905efe1da', title: 'PATENT_TITLE_5089' },
        { id: '304838b9-3255-467f-b669-53488ea660a2', title: 'PATENT_TITLE_6001' },
        { id: 'a16fda7c-7f67-49ed-a605-d763d12b7a16', title: 'PATENT_TITLE_9285' },
        { id: '2f2f351e-7b74-46fe-95a4-a2b21a1ce207', title: 'PATENT_TITLE_5279' },
        { id: '83ea9412-478c-4719-b585-7dcae23d4780', title: 'PATENT_TITLE_8216' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App