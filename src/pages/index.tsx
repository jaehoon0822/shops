import Main from '../components/Template/Main'
import UseFetchUseditems from '../components/commons/hooks/query/UseFetchUseditems'

export default function Home() {
  const { data } = UseFetchUseditems(1)
  return (
    <div>
      <Main boards={data?.fetchUseditems ?? []} />
    </div>
  )
}
