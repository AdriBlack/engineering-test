

function handleError(err: any) {
    console.log('ERROR', err)
}

async function getUsers(): Promise<void> {

    const response = await fetch('http://localhost:3001/api/1/users')

    //Fetch returns response.ok true to only 200-299 so this will throw all other erros
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const users = await response.json()
      return users
}



export default async function Page() {
    const data =  await getUsers().catch(handleError)

// TEST DATA
/*
Using this test data to test the error page. I am doing something silly that 'data' 
is not being returned giving me a type void
*/
const testData = [  {
    id: '094bc502-7cb7-4b27-836b-f41ed8ca335d',
    name: 'Delpha Steuber MD',
    email: 'Laurine_Stanton@hotmail.com'
  },
  {
    id: '5dea872d-1caf-4174-92cb-6b9ff4cb3aff',
    name: 'Dr. Marion Leuschke',
    email: 'Enrico_Daugherty38@yahoo.com'
  },]


    const userKeys = Object.keys(testData)
    {userKeys.forEach((user: User) => {
      console.log('user', testData[user].name)
    })}


    return (
        <>
        <h1>List of Users</h1>
        {/* TODO: add User type */}
        {userKeys.forEach((user: Object) => {
            <>
            <b>Name:</b>
            <p>testData[user].name</p>
            <b>Email:</b>
            <p>testData[user].email</p>
            </>
        })}
      
        </>
    )
}
