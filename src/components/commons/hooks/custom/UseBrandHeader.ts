import UseMutationDeleteUseditem from '../mutation/UseMutationDeleteUseditem'
import UseMutationToggleUseditemPick from '../mutation/UseMutationToggleUseditemPick'
import { FETCH_USEDITEMS } from '../query/UseFetchUseditems'
import UseFetchUseditemsIPicked from '../query/UseFetchUseditemsIPiecked'
import UseRoute from './UseRoute'

const UseBrandHeader = (useditemId: string) => {
  const { back } = UseRoute()
  const { deleteUseditem } = UseMutationDeleteUseditem()
  const { toggleUseditemPick } = UseMutationToggleUseditemPick()
  const { data: useditemsIPickedData } = UseFetchUseditemsIPicked()

  const onClickDeleteUseditem = () => {
    void deleteUseditem({
      variables: {
        useditemId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEMS,
          variables: {
            page: 1,
            search: '',
          },
        },
      ],
    })

    back()
  }

  const onClickToggleUseditemPick = async () => {
    const { data } = await toggleUseditemPick({
      variables: {
        useditemId,
      },
    })

    console.log(data?.toggleUseditemPick)
  }

  console.log(useditemsIPickedData?.fetchUseditemsIPicked)
  return {
    useditemsIPickedData,
    onClickDeleteUseditem,
    onClickToggleUseditemPick,
  }
}

export default UseBrandHeader
