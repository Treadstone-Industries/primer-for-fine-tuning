import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dc2c219d-51a9-4ac4-8c85-5bbc984551fe', title: 'PATENT_TITLE_4592' },
        { id: '4238f998-11d3-4c71-ad30-c9c589ab571d', title: 'PATENT_TITLE_2837' },
        { id: '2617619a-a89d-4e97-a489-f95ec40f2fa1', title: 'PATENT_TITLE_8735' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App