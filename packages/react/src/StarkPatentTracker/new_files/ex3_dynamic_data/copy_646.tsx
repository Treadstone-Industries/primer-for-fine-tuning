import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3796f50e-d6e0-4f24-97b9-825c9ea9128b', title: 'PATENT_TITLE_2141' },
        { id: 'fbf17164-14a3-4b5d-b5c0-57eaa91cece6', title: 'PATENT_TITLE_7863' },
        { id: '327b0bde-a16a-4de2-8339-07fb4fd3d382', title: 'PATENT_TITLE_5736' },
        { id: '4ea1f557-08ae-42b6-aaaa-a1f62efdbe63', title: 'PATENT_TITLE_2050' },
        { id: '37d8b3f0-15d4-4122-9e43-dd2ed047b97c', title: 'PATENT_TITLE_7973' },
        { id: 'f1bf4670-bb81-4ee3-885a-9dda16e281a8', title: 'PATENT_TITLE_2963' },
        { id: 'aeeb9fd2-2318-4fe4-ae80-415ecafe86bf', title: 'PATENT_TITLE_5173' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App