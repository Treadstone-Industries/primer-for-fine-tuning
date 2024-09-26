import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3bc5eae7-bd42-4af6-9ba9-c9eb3518e8fd', title: 'PATENT_TITLE_4186' },
        { id: 'd9da129a-fe82-4b1d-b94b-39d4a71f8dd5', title: 'PATENT_TITLE_8742' },
        { id: '3eb27739-26a9-421e-8edf-a7effc2c5a8f', title: 'PATENT_TITLE_7189' },
        { id: '8abe575b-51b1-486d-84f4-419abac41dbb', title: 'PATENT_TITLE_8963' },
        { id: '32471589-d0dc-400e-88b1-474b419b38d9', title: 'PATENT_TITLE_1615' },
        { id: 'ab7050a7-32d0-441a-bbe0-6041c15c6227', title: 'PATENT_TITLE_4635' },
        { id: '061e1f8c-d8f0-4203-b0b8-c1118e1cfec8', title: 'PATENT_TITLE_8695' },
        { id: 'ddb681ec-77b7-4511-942a-c6d4d33a038f', title: 'PATENT_TITLE_3783' },
        { id: '96383727-0962-4f09-a258-c9f8bb769e0a', title: 'PATENT_TITLE_4288' },
        { id: '82ffb754-8c47-46d9-bbc2-8202fe0cefa1', title: 'PATENT_TITLE_7865' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App