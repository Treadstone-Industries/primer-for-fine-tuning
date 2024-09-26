import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '551cf3f0-402c-46ad-ac53-cd4b55498fe2', title: 'PATENT_TITLE_9758' },
        { id: '94c27c8a-b8a8-4ff0-8d62-b12fe4357ff7', title: 'PATENT_TITLE_5502' },
        { id: '0c2bfbfc-4fcf-40a8-a3e8-a447ef77017b', title: 'PATENT_TITLE_9346' },
        { id: '05186ec3-be44-4653-a53a-d1c64d0b53c7', title: 'PATENT_TITLE_7761' },
        { id: '56617efc-6d30-4b67-9e05-732565dece82', title: 'PATENT_TITLE_5336' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App