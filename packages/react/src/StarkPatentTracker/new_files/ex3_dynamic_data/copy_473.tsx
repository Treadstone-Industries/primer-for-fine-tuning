import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '68693415-7ace-4587-b8e2-b5a1868ea831', title: 'PATENT_TITLE_5910' },
        { id: '7333e277-0806-4e35-a00e-7a26e5c4abee', title: 'PATENT_TITLE_1269' },
        { id: 'a6df4253-bac9-419c-a2fa-55d8c330a087', title: 'PATENT_TITLE_5653' },
        { id: '243bc586-96de-4f76-978c-e8cc48578907', title: 'PATENT_TITLE_2177' },
        { id: '30b1c815-5c3e-4419-aa51-d4f71692c7ea', title: 'PATENT_TITLE_1958' },
        { id: 'e1e034b5-c26e-48f4-9299-783f4c59bc75', title: 'PATENT_TITLE_6100' },
        { id: 'f2bce1be-73ae-4421-a27c-bb2a0e94dccb', title: 'PATENT_TITLE_1052' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App