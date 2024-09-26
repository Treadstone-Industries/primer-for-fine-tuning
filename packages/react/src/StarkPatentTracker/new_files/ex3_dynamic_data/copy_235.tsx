import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e1537462-079a-477f-9b6d-8e5ba1f84101', title: 'PATENT_TITLE_2291' },
        { id: 'fdb6acdb-aadf-4d37-ab51-4b5c7b2ad593', title: 'PATENT_TITLE_9779' },
        { id: '303f818d-eafb-4084-a87e-50077845374a', title: 'PATENT_TITLE_2627' },
        { id: '5c1dad3d-9ef3-4bdc-bbb6-a6d3ff5602a2', title: 'PATENT_TITLE_5374' },
        { id: '45a3edbe-84c1-4638-be26-b43be6b6ff3f', title: 'PATENT_TITLE_2924' },
        { id: '05dd7c71-6dd5-46b0-a150-cc7b8c40e843', title: 'PATENT_TITLE_1044' },
        { id: '44a99ac6-2e6b-4fbc-8d31-c3f9023e362b', title: 'PATENT_TITLE_4220' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App