import React from 'react'; 
import { Route } from 'react-router-dom'

export default function CreateRoute(props) {
  return(
    <Route
      path={props.path}
    >
      {props.components}
    </Route>
  )
}

