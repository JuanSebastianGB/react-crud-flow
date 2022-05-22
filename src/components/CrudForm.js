import React from 'react'

const CrudForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="text" name="url" placeholder="Url"></input>
        <input type="submit" value="send" />
        <input type="reset" value="Clean" />
      </form>
    </div>
  )
}

export default CrudForm