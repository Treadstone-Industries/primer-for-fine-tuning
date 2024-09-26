import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ba77a234-09d6-4201-9bf5-82336567f7fc', title: 'PATENT_TITLE_2293' },
        { id: 'fa523211-a651-40e2-8250-5ae836080b5c', title: 'PATENT_TITLE_6719' },
        { id: '3f34ec4c-98c2-4573-8310-27be9528d0d0', title: 'PATENT_TITLE_6452' },
        { id: '571cbd11-bd65-4124-91ce-fed1c3b4e3b8', title: 'PATENT_TITLE_2350' },
        { id: 'a8c20dbe-03b4-4b69-9e93-f98fb04310da', title: 'PATENT_TITLE_3957' },
        { id: 'b17d2d13-ad48-499c-b7a8-2d6e614eebae', title: 'PATENT_TITLE_1767' },
        { id: 'b7c97bc1-a318-4ebb-8233-ef986a0b82ab', title: 'PATENT_TITLE_6002' },
        { id: '0c855229-3fff-4b4c-bb31-c9caf603d1a2', title: 'PATENT_TITLE_9083' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App