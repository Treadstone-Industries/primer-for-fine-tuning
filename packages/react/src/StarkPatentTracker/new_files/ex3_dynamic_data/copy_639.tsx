import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '22dc8cbd-125f-438f-8b43-0bf10253241e', title: 'PATENT_TITLE_3024' },
        { id: '22b69708-27d8-4719-8189-228fcabf4bfd', title: 'PATENT_TITLE_1603' },
        { id: '78cc1b14-0813-412e-9d36-e70b92d6d305', title: 'PATENT_TITLE_6587' },
        { id: 'cd3f3e0d-95fe-44d2-b9b2-0823f3356679', title: 'PATENT_TITLE_1554' },
        { id: 'bcd7cb83-e92e-4f19-961b-bf6bd27badd1', title: 'PATENT_TITLE_7414' },
        { id: 'ba96cb30-e3fe-4ce6-9b06-ef2cc47173a2', title: 'PATENT_TITLE_5393' },
        { id: '04a67d45-e0b9-45b6-bd5a-061906c2a3f0', title: 'PATENT_TITLE_8413' },
        { id: 'b67694dc-faac-4803-8136-21c6f732c6f5', title: 'PATENT_TITLE_8330' },
        { id: '62b794a3-2574-4445-81f7-485b1a80e9cf', title: 'PATENT_TITLE_5239' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App