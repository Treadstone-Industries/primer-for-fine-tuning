import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'acef2661-a9e1-4625-8359-4e41512584a9', title: 'PATENT_TITLE_4665' },
        { id: '380bac73-144b-4921-a32c-af817e98f370', title: 'PATENT_TITLE_7034' },
        { id: 'a6e0612e-35fb-44f4-8302-0a615e261e37', title: 'PATENT_TITLE_5365' },
        { id: '236126f5-e2c9-459e-84bc-d5adbc1bd4c9', title: 'PATENT_TITLE_6323' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App