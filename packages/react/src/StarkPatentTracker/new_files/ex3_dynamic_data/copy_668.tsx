import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '85fb07f3-e678-4cb4-b58e-79215b3000ec', title: 'PATENT_TITLE_2877' },
        { id: '5a3b3aa1-e8bc-4dcc-82e0-1a280ab1706d', title: 'PATENT_TITLE_1666' },
        { id: '3c018ace-dbc7-468c-a844-63705cc4bb49', title: 'PATENT_TITLE_2651' },
        { id: 'fa7b9732-eb6c-4951-86b6-daaecf93f6a2', title: 'PATENT_TITLE_4932' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App