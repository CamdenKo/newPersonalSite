import React from 'react'

import {
  Purple,
  PurpleTriangle,
  Disappearer,
} from '../../../Components'

export default props => (
  <div>
    <Purple>
      {props.children}
    </Purple>
    <Disappearer>
      <PurpleTriangle />
    </Disappearer>
  </div>
)