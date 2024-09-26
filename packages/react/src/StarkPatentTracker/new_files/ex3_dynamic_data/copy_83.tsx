import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a99b54ec-0e24-409b-85ef-38d0cf4cc297', title: 'PATENT_TITLE_4990' },
        { id: 'a5a9bd35-5cd5-4ff4-888f-268e277e7fcf', title: 'PATENT_TITLE_7983' },
        { id: 'a3d85352-b40f-4a6d-88db-10773bef2e5d', title: 'PATENT_TITLE_6257' },
        { id: '00ce3591-8342-4643-963f-f3eef7d43e60', title: 'PATENT_TITLE_7561' },
        { id: '03dfd2b8-fa1c-4f4f-87cb-94239d4f511b', title: 'PATENT_TITLE_2627' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App