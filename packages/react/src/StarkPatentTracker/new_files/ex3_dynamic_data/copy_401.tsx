import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '6a3a0d0f-d57b-4df2-b9d1-e9ad57f5b8d9', title: 'PATENT_TITLE_6625' },
        { id: '9d70f834-86ff-4a1f-8b78-1b8b6e68208e', title: 'PATENT_TITLE_8384' },
        { id: '6fd0be29-4b52-4ed1-8c9f-e7369795fcf9', title: 'PATENT_TITLE_3665' },
        { id: '51394d7d-6e61-4108-8d58-b0daa18a1e05', title: 'PATENT_TITLE_1645' },
        { id: '3a062dca-414b-460b-9fb2-a1da611cfff8', title: 'PATENT_TITLE_4193' },
        { id: 'c44ec2be-087d-439d-ad1b-a12e9eea5cce', title: 'PATENT_TITLE_8397' },
        { id: '191eac88-4a6b-4a19-9ee6-e66addaeb266', title: 'PATENT_TITLE_5754' },
        { id: '63297c04-c419-4af7-9253-ce622fcdeef3', title: 'PATENT_TITLE_9539' },
        { id: '41daea56-ff7e-4d02-ba34-a15d8e2ec299', title: 'PATENT_TITLE_4845' },
        { id: '44e19230-5811-4666-b46d-3ab3a4d76664', title: 'PATENT_TITLE_1844' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App