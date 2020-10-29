import React from 'react'
import Person from './Person'

const NameList = () => {
  const langs = ["Java", "C#", "Ruby","Python"]

  const persons = [
    {
      name: "Jack",
      skill: langs[0]
    },
    {
      name: "Jill",
      skill: langs[2]
    },
    {
      name: "Jim",
      skill: langs[3]
    },
    {
      name: "Jade",
      skill: langs[1]
    }
  ]

  const personList = persons.map((person) => <Person person={person}/>)

  return (
    <div>
      {
        langs.map((lang) => <h2>{lang}</h2> )
      }
    <div>
      {personList}
    </div>
    </div>
  )
}

export default NameList
