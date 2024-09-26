import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fcf4f355-d0dc-4832-821e-745b61b1c60c', title: 'PATENT_TITLE_6873' },
        { id: 'c414b8b4-655e-4b3c-822c-6a360a104840', title: 'PATENT_TITLE_3729' },
        { id: '379c35d9-dbf0-413f-893b-d163c3d955f5', title: 'PATENT_TITLE_9886' },
        { id: '63e24a2e-fcc9-4399-b682-e355f0b7e80f', title: 'PATENT_TITLE_1215' },
        { id: 'd098c827-8faa-4f3a-9622-90fd46b8f099', title: 'PATENT_TITLE_8759' },
        { id: 'ad4259f0-e6ce-4356-8769-df9bb6667635', title: 'PATENT_TITLE_9738' },
        { id: 'ce2a99f1-860a-4d0d-9766-d96f6f4d1c98', title: 'PATENT_TITLE_2927' },
        { id: '59ad1181-b7db-4c77-9b62-c111777e27d2', title: 'PATENT_TITLE_4598' },
        { id: 'f484677f-18ea-4577-a057-936ffa1c9210', title: 'PATENT_TITLE_9804' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App