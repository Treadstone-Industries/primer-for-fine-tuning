import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a749da78-7a82-40bc-ab70-bbb23ec76f59', title: 'PATENT_TITLE_5289' },
        { id: 'bec2c539-86d9-4da6-bdc8-1e9ea912e8f7', title: 'PATENT_TITLE_6805' },
        { id: '967f06b6-ba99-4b06-be0a-c9bd9e80d6f5', title: 'PATENT_TITLE_1791' },
        { id: 'f5705f43-ddf9-4230-956c-63bd616c301f', title: 'PATENT_TITLE_2566' },
        { id: 'cfa61eb8-6b79-49f9-a01f-4fd3cf44a14a', title: 'PATENT_TITLE_4270' },
        { id: '1b03e0ab-44bf-4691-8a8f-de37e25ecbae', title: 'PATENT_TITLE_7354' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App