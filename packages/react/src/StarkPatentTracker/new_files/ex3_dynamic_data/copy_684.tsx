import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '57a02aa1-91cc-44b6-ad6d-0af0836acbb9', title: 'PATENT_TITLE_2172' },
        { id: 'cce0379f-8a6b-4086-b2a7-df7965692d7a', title: 'PATENT_TITLE_6788' },
        { id: '565acfac-ea21-464c-a792-7528b074ce76', title: 'PATENT_TITLE_4697' },
        { id: '2f6e6ec5-01b9-4c96-9e35-297daa553958', title: 'PATENT_TITLE_4918' },
        { id: 'e6222f63-7118-4174-865e-976d45285063', title: 'PATENT_TITLE_5310' },
        { id: '04fc6c2e-fa39-4323-8865-0e950c2b1b85', title: 'PATENT_TITLE_8306' },
        { id: '5a806a4b-e635-4d14-bd8f-8dee82dcfaa0', title: 'PATENT_TITLE_2837' },
        { id: '28e1d2f2-277f-4c8e-bcad-fc2a87120975', title: 'PATENT_TITLE_8514' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App