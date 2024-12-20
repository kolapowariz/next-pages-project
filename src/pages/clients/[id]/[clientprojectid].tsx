import { useRouter } from 'next/router';
export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>Selected Client Project Page</ div>
  )
}
