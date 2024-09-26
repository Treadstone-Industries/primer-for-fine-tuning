import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '78bb540f-e496-48bc-bb7e-7f9bd06663cc', title: 'PATENT_TITLE_3852' },
        { id: 'e0f640d8-f555-4e6c-b486-4cf5a32fec8a', title: 'PATENT_TITLE_3970' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App