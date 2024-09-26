import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f0231c3f-1f24-4f9d-924a-055de41c1d25', title: 'PATENT_TITLE_6374' },
        { id: '6abc6529-2fde-4908-98b9-24993d6671d1', title: 'PATENT_TITLE_9958' },
        { id: '971fc56d-7b30-4d01-95ad-a27dc3018364', title: 'PATENT_TITLE_9491' },
        { id: 'c0968131-2698-4775-b1e6-1461dd1363e2', title: 'PATENT_TITLE_6479' },
        { id: '41b93aa8-b882-4887-9006-ed72fbc64804', title: 'PATENT_TITLE_2132' },
        { id: '3709b49e-645e-40da-8a33-5eeadef1eb3e', title: 'PATENT_TITLE_8794' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App