import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '05c3a3f4-4792-4393-8dfb-0ae244474ff8', title: 'PATENT_TITLE_1464' },
        { id: '10c22f61-065f-49ed-bcac-d05614cc7bd4', title: 'PATENT_TITLE_7317' },
        { id: 'f6086830-3592-489e-ae02-8c3953b87164', title: 'PATENT_TITLE_3515' },
        { id: '910cb969-1d3f-4a12-9ef5-143a90eb580b', title: 'PATENT_TITLE_6826' },
        { id: '9b37ded3-25e6-4b30-be01-dec98c15840d', title: 'PATENT_TITLE_3872' },
        { id: '8ef1d421-1f7e-4bcb-92e7-cba4838f8cad', title: 'PATENT_TITLE_4844' },
        { id: '27bfeee6-b178-4e61-9010-fd8ce8fad367', title: 'PATENT_TITLE_6731' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App