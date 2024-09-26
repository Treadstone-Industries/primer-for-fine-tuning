import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9943ad27-efde-422a-886b-7651a862e9ad', title: 'PATENT_TITLE_7826' },
        { id: 'de91272e-4c7e-43b8-991a-0c82aa1ec028', title: 'PATENT_TITLE_3037' },
        { id: '0a1b6f09-eb62-4f35-9a19-47f6d947b32d', title: 'PATENT_TITLE_4592' },
        { id: 'b7da6c33-c9f0-45c0-80a1-4c686f614519', title: 'PATENT_TITLE_9193' },
        { id: '302e5c84-1513-4864-a461-31590fa83f4d', title: 'PATENT_TITLE_7893' },
        { id: 'b118a226-1b4b-434b-bd2e-3dc5719e1d2d', title: 'PATENT_TITLE_1372' },
        { id: '3fdb96e3-b133-4d32-8c66-fbd46dd4146e', title: 'PATENT_TITLE_5488' },
        { id: 'a7d20a87-715c-4717-9699-a5e2b830d39b', title: 'PATENT_TITLE_9280' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App