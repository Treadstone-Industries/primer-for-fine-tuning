import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a0ff75e8-8cb8-480d-af41-cc86776290df', title: 'PATENT_TITLE_5457' },
        { id: '7c71d604-3bd8-4049-b220-ce2740433263', title: 'PATENT_TITLE_5368' },
        { id: '0d138c35-807f-4066-b297-b4325f51740a', title: 'PATENT_TITLE_7934' },
        { id: '0b9cffca-d8fc-41c0-b0fb-62dc6b1e96b0', title: 'PATENT_TITLE_2297' },
        { id: '819d3400-afae-417b-85de-2b468f63baee', title: 'PATENT_TITLE_3968' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App