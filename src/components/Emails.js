import Email from './email'

function Emails(props) {

  return (

    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email

          key={index}
          email={email}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}

        />

      ))}
    </ul>

  )
}

export default Emails