import React from 'react';

export default function RepoItem({ id, name, description, date, topics, link }) {

  return (
    <>
      <tr key={id}>
        <td><a target="_blank" rel="noopener noreferrer" href={link} ><p>{name}</p></a></td>
        <td><p>{description}</p></td>
        <td><p>{date}</p></td>
        <td><p>{topics}</p></td>
      </tr>
    </>
  )
}
