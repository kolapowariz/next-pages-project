import Link from "next/link";

export default function ClientsPage() {

  const clients = [
    { id: 'war', name: 'WAriz'},
    { id: 'ola', name: 'Oladimeji'}
  ]

  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <Link href={
              {
                pathname: '/clients/[id]',
                query: { id: client.id}
              }
            }>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
