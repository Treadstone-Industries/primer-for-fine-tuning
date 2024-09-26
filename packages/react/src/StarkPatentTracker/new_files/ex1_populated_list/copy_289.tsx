import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'fa845d0e-3f02-4b92-b742-a3dfe67229bc', title: 'PATENT_TITLE_4135' },
            { id: '7505a841-49f3-4a93-a2d7-3010f92308b2', title: 'PATENT_TITLE_4568' },
            { id: 'dea76f8f-abc2-49bd-8f92-9e0f3f13b17e', title: 'PATENT_TITLE_2451' },
            { id: '60f53320-fce8-49bb-a884-b5d02a63ed29', title: 'PATENT_TITLE_6971' },
            { id: '043ea3e6-ae1e-48bf-92ca-b4f4e3124f1d', title: 'PATENT_TITLE_5287' },
            { id: '30e842e3-b9e1-459e-ad95-2a2a542858aa', title: 'PATENT_TITLE_6792' },
            { id: '98f836fc-a85c-40c6-8679-4fa02f6f56e0', title: 'PATENT_TITLE_3531' },
            { id: 'e0f97ac2-cef4-4986-a1fd-41aa277adbc8', title: 'PATENT_TITLE_1583' },
            { id: '8321378a-2d29-4ae9-9c2f-974dcaf157b6', title: 'PATENT_TITLE_1908' },
            { id: '7aa3955d-f706-4b17-a9f3-7ba99ae935e2', title: 'PATENT_TITLE_8305' },
        ]}
    />
)

export default App