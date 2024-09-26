import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '8b449f3b-c945-4083-a63f-9483f5b72de2', title: 'PATENT_TITLE_4191' },
            { id: '43a828e0-9a7a-4871-89e3-b0fbe3506c0b', title: 'PATENT_TITLE_5807' },
            { id: 'f649e496-5e90-40ff-8b69-36f39529a65f', title: 'PATENT_TITLE_8631' },
            { id: '16b427c6-ac49-4f7a-b2f9-420e6f924ebd', title: 'PATENT_TITLE_2820' },
            { id: '536fb1df-418c-422d-b2d7-0acc01bb4446', title: 'PATENT_TITLE_8338' },
            { id: 'e543b935-667e-4e6b-8e41-4bcba3c5935e', title: 'PATENT_TITLE_7695' },
            { id: '5cd1f060-15dd-496e-b456-e711a514d4ed', title: 'PATENT_TITLE_8126' },
            { id: '86fc94ac-d7c6-4604-9ea9-f9a46c7a6f60', title: 'PATENT_TITLE_1522' },
            { id: '70f28623-724f-408d-b96c-79d20f7bcd0c', title: 'PATENT_TITLE_2272' },
            { id: '84e5ff41-7724-4021-b859-600618cf9e32', title: 'PATENT_TITLE_1686' },
        ]}
    />
)

export default App