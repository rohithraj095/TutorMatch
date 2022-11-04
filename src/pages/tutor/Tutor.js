import styles from './Tutor.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection, useCollectionSimple } from '../../hooks/useCollection'
//import {projectFirestore} from 'src/firebase/config.js'

import { useState } from 'react'

// components
import ClassesListNoDel from '../home/ClassListNoDel'

import Filter from './Filter'

export default function Tutor() {

  const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'Classes',
        null,
        ["createdAt","desc"]
    )
    const [currentFilter, setCurrentFilter] = useState('all')

    const changeFilter = (newFilter) => {
      setCurrentFilter(newFilter)
    }

    const projects = documents ? documents.filter(document => {
      switch(currentFilter) {
        case 'all':
          return true
        case 'MA':
        case 'CS':
        case 'EE':
        case 'STAT':
        case 'ECON':
        case 'COM':
          console.log(document.courseDept, currentFilter)
          return document.courseDept === currentFilter
        default:
          return true
      }
    }) : null



    return (
      <div className={styles.container}>
        <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <Filter currentFilter={currentFilter} changeFilter={changeFilter}/>}
            {projects && <ClassesListNoDel Classes={projects} />}
        </div>
      </div>
    )
  }