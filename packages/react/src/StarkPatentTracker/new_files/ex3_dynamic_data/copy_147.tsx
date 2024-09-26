import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'ec4b6d2b-6289-4eea-97e5-681375e8a708', title: 'PATENT_TITLE_5798' },
        { id: 'e887c3ac-a916-443b-9764-14a5f8b31afb', title: 'PATENT_TITLE_5505' },
        { id: '8fbe6e91-d222-44a5-a55f-194ad6ce69d4', title: 'PATENT_TITLE_5866' },
        { id: '2f1ea796-418c-4d69-98ef-2a519c42ae3c', title: 'PATENT_TITLE_8904' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App