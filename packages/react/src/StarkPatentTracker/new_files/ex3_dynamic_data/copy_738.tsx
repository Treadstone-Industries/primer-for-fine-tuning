import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1cf5c208-5568-439b-9cd6-40122ca90866', title: 'PATENT_TITLE_2052' },
        { id: '16f8a115-4f14-48ef-939b-522044f739d2', title: 'PATENT_TITLE_6859' },
        { id: 'c8b38375-6607-4858-9b0a-84f5ed550002', title: 'PATENT_TITLE_2141' },
        { id: '92425afd-168c-4f94-9838-14e954bf75d0', title: 'PATENT_TITLE_8036' },
        { id: '4da6b272-ee75-45cd-8fac-c467d6bef0c0', title: 'PATENT_TITLE_1022' },
        { id: '2a38c7b0-e322-4f29-a5e6-6f1d402560e1', title: 'PATENT_TITLE_5792' },
        { id: '4e86dbe5-09ba-400f-b386-b69d61656223', title: 'PATENT_TITLE_9485' },
        { id: 'e2b50173-00d0-49f2-8a34-fb40355e6ae2', title: 'PATENT_TITLE_3127' },
        { id: 'a0ac59a0-7d82-4979-89c3-e10a264a14ec', title: 'PATENT_TITLE_8923' },
        { id: '688c524a-936c-46cc-acbd-43e3934132ff', title: 'PATENT_TITLE_9590' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App