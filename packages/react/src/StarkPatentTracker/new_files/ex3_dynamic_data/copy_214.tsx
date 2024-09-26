import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '49fa1cdc-7510-4a96-909a-4bfe9b0a13a3', title: 'PATENT_TITLE_6383' },
        { id: '12ed5880-4ccf-4c5a-98e6-a22e6e552683', title: 'PATENT_TITLE_8237' },
        { id: '00b3d1fe-e546-4698-9eb0-d593a2147d11', title: 'PATENT_TITLE_4250' },
        { id: '9eda465e-7458-4759-8de9-b8771ca7d8c0', title: 'PATENT_TITLE_3948' },
        { id: '418c0668-a23e-4e08-9582-32a5e54525a1', title: 'PATENT_TITLE_1149' },
        { id: '5eb0ce3f-fc22-4dad-bfd1-f4c170359723', title: 'PATENT_TITLE_2025' },
        { id: '3bbdcc44-3352-48b9-9cab-e3ea581a2135', title: 'PATENT_TITLE_6127' },
        { id: '09252697-4642-4048-a8e8-6b231d4c2c18', title: 'PATENT_TITLE_6920' },
        { id: '4ba05bec-e1a1-4a0c-8f7d-f2f9cce5ab4f', title: 'PATENT_TITLE_5825' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App