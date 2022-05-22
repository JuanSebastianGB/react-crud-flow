import React, { Fragment } from 'react'
import CrudForm from './CrudForm'

const techs = [
  {
    id: 1,
    name: 'React',
    url: 'https://reactjs.org/docs/getting-started.html'
  },
  {
    id: 1,
    name: 'Angular',
    url: 'https://angular.io/docs'
  },
  {
    id: 1,
    name: 'Vue.js',
    url: 'https://vuejs.org/guide/introduction.html'
  },

]

const CrudApp = () => {
  return (
    <Fragment>
      <CrudForm />
    </Fragment>
  )
}

export default CrudApp