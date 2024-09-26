import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6a35e5c4-13fd-45a7-8cf1-4ddc5c0d93e6', title: 'PATENT_TITLE_2976' },
        { id: '06339940-ee06-41ad-9659-05d98d8af8cc', title: 'PATENT_TITLE_8515' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App