import React from 'react'

const NameList = () => {
  const langs = ["Java", "C#", "Ruby","Python"]

  return (
    <div>
      {
        langs.map((lang) => <h2>{lang}</h2> )
      }
    </div>
  )
}

export default NameList
