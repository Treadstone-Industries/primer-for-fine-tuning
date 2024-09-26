import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8de932f9-6119-455b-848a-12c1b3ac080b', title: 'PATENT_TITLE_2620' },
        { id: '53c00bff-b30f-434a-9da4-720b3822afb7', title: 'PATENT_TITLE_1959' },
        { id: 'd7ccc3bf-c51b-4a39-8d73-fecaf1b30d86', title: 'PATENT_TITLE_5837' },
        { id: 'db6eae77-91f9-4448-96a8-e5704bc258e7', title: 'PATENT_TITLE_4763' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App