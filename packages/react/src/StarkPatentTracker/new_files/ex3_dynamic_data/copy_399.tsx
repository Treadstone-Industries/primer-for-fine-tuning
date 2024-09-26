import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '63a07c9b-ba96-4dd0-a810-2e324d45c692', title: 'PATENT_TITLE_1348' },
        { id: '41a1cc41-fde3-4599-97f1-3504eb713eb1', title: 'PATENT_TITLE_5371' },
        { id: 'b3a20f7a-0313-43e2-aa04-dbb35f5ba892', title: 'PATENT_TITLE_2355' },
        { id: 'b3f194f0-cebb-4125-a794-11054478a862', title: 'PATENT_TITLE_7971' },
        { id: '612f82cc-8295-4675-b1e2-79b8bc13d21d', title: 'PATENT_TITLE_6691' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App