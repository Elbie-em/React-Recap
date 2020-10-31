import React from 'react'
import Person from './Person'

const NameList = () => {
  const langs = ["Java", "C#", "Ruby","Python"]

  const persons = [
    {
      id:1,
      name: "Jack",
      skill: langs[0]
    },
    {
      id:2,
      name: "Jill",
      skill: langs[2]
    },
    {
      id:3,
      name: "Jim",
      skill: langs[3]
    },
    {
      id:4,
      name: "Jade",
      skill: langs[1]
    }
  ]

  const langList =  langs.map((lang, index) => <h2 key={index}>{lang}</h2> )
  const personList = persons.map((person) => <Person key={person.id} person={person}/>)

  return (
    <div>
      {langList}
    <div>
      {personList}
    </div>
    </div>
  )
}

export default NameList
