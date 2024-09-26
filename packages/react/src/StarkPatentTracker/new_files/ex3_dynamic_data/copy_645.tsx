import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '7308d364-9e52-4d05-9239-7bcba27386fd', title: 'PATENT_TITLE_6590' },
        { id: '69034775-3e97-4bdc-a76c-aaa8746afac0', title: 'PATENT_TITLE_3761' },
        { id: 'a1eddd8b-e277-4f1a-b8c2-f2579986cccd', title: 'PATENT_TITLE_2001' },
        { id: '746b06da-8448-44e3-a1d3-536841ddab6d', title: 'PATENT_TITLE_4657' },
        { id: 'e862e476-bb76-491a-92b0-afcd58595b05', title: 'PATENT_TITLE_7967' },
        { id: '0092fe79-994b-4278-9975-f7e13f1865c9', title: 'PATENT_TITLE_8737' },
        { id: '0ac1d20e-a26d-49ba-bb32-bfade636b367', title: 'PATENT_TITLE_8392' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App