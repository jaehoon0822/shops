import { useMemo } from 'react'
import Registration from '../../../../components/Template/Registration'
import UseRoute from '../../../../components/commons/hooks/custom/UseRoute'
import UseFetchUseditem from '../../../../components/commons/hooks/query/UseFetchUseditem'

const EditPage = () => {
  const { query } = UseRoute()
  const { data } = UseFetchUseditem(query.id as string)
  const fetchUseditem = useMemo(() => data?.fetchUseditem, [data])
  return <Registration defaultValue={fetchUseditem} isEdit />
}

export default EditPage
