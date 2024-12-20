import { useRouter } from 'next/router'

export default function ClientsProjectsPage() {

  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    // Load data...
    // router.push('/clients/war/projects/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'war', clientprojectid: 'projecta'}
    })
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
