import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '50a92e1e-da81-4aaa-b76e-61f83b1de7ee', title: 'PATENT_TITLE_3479' },
            { id: '4d515d61-ccc5-49d0-9f7c-36af54cd632a', title: 'PATENT_TITLE_9313' },
            { id: '3d2f0706-1684-4d2c-a61a-9fa5285cc169', title: 'PATENT_TITLE_4435' },
            { id: '4edfa028-579a-4cc4-ad91-ae5b90953fce', title: 'PATENT_TITLE_8598' },
            { id: '9a4f7789-f8ac-4629-847d-6b09246a67e6', title: 'PATENT_TITLE_3435' },
            { id: '43a1ca70-434f-4b2c-a58e-e2d307449290', title: 'PATENT_TITLE_9228' },
            { id: '27ffa6c4-7919-4d38-b693-3b7c9f7374c7', title: 'PATENT_TITLE_3361' },
            { id: '4c664bcd-4161-45a6-abaa-72d837f4ab9f', title: 'PATENT_TITLE_2943' },
            { id: 'a8b4387e-dd1a-4569-abca-5dcdbcba6664', title: 'PATENT_TITLE_4975' },
        ]}
    />
)

export default App