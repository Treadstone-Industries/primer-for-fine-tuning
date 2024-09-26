import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0075ae69-83bc-4707-ab50-842cee76f652', title: 'PATENT_TITLE_1075' },
        { id: 'f596ce80-3c35-4fe3-a2e3-c9c5cd2705a1', title: 'PATENT_TITLE_2886' },
        { id: '6cd22b40-f8a8-4a3f-9267-e7bdb21b1573', title: 'PATENT_TITLE_8037' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App