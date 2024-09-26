import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '809234ff-9f43-441d-91bd-f409aebb3c44', title: 'PATENT_TITLE_6553' },
        { id: '9b234273-cced-4b04-b409-6d32e5f895cf', title: 'PATENT_TITLE_7665' },
        { id: '2e9db08d-b2ee-464c-a643-1911bdd44954', title: 'PATENT_TITLE_7163' },
        { id: 'c89193c4-13c6-4263-9310-152930cf1a72', title: 'PATENT_TITLE_7043' },
        { id: '1d93078b-5b88-40f7-9d1f-5785a7572b97', title: 'PATENT_TITLE_6234' },
        { id: '20fa9073-4cd3-4280-8953-76705aac1189', title: 'PATENT_TITLE_7211' },
        { id: '3bec6d3b-4d32-42da-9117-df69b8451496', title: 'PATENT_TITLE_6250' },
        { id: '1e9ed577-109c-4670-9d2d-06ace6a380ae', title: 'PATENT_TITLE_9408' },
        { id: '7eba9983-0b53-4b44-a4e5-fd74049ea446', title: 'PATENT_TITLE_7713' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App