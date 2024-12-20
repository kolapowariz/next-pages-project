import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();
  console.log(router.query)
  console.log(router.pathname)
  return (
    <div>Portfolio Project Page</div>
  )
}