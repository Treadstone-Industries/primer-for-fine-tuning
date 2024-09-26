import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '46894339-4d75-4a61-83ab-aa581bd21206', title: 'PATENT_TITLE_5544' },
        { id: 'd51c09a1-a256-4c35-b285-b1af1e3911ac', title: 'PATENT_TITLE_7379' },
        { id: '801e4a60-b7d9-4d0c-afcf-d57a1b4a6cc0', title: 'PATENT_TITLE_8017' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App