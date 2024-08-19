import { Fragment, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { FieldInputSearch } from '@components/FieldInputSearch'
import { InformerNoResults } from '@components/InformerNoResults'
import { TableHeader } from '@components/TableHeader'
import { TableRowSentry } from '@components/TableRowSentry'
import { TableWrapper } from '@components/TableWrapper/TableWrapper'
import { DEBOUNCE_DELAY_DEFAULT, PAGINATION_DEFAULT_LIMIT } from '@constants/index'
import { ClientRow } from '@features/clients/components/ClientRow'
import { QueryKey } from '@features/shared/data'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useDebounce } from '@uidotdev/usehooks'

export const ClientsRoute = () => {
  const { organizationID } = useOrganizationID()
  const { api } = useApi()

  const [query, setQuery] = useState('')
  const queryDebounced = useDebounce(query, DEBOUNCE_DELAY_DEFAULT)

  const { data, hasNextPage, isFetchingNextPage, isFetching, fetchNextPage, status } = useInfiniteQuery({
    queryKey: [QueryKey.Clients, organizationID, queryDebounced],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.workSersOrgsList({
        orgId: organizationID.toString(),
        limit: PAGINATION_DEFAULT_LIMIT,
        offset: pageParam * PAGINATION_DEFAULT_LIMIT,
        name: queryDebounced,
      })

      return data ?? []
    },
    initialDataUpdatedAt: 0,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => lastPage.length === 0 ? null : allPages.length,
    refetchOnWindowFocus: false,
  })

  const [sentryRef] = useInfiniteScroll({
    loading: isFetching || isFetchingNextPage,
    hasNextPage,
    onLoadMore: fetchNextPage,
  })

  return (
    <>
      <TableHeader
        sx={{ marginTop: '8px' }}
        renderSearch={(
          <FieldInputSearch
            value={query}
            placeholder={'Поиск по клиенту'}
            onChange={(event) => setQuery(event.target.value)}
          />
        )}
      >
        Клиенты
      </TableHeader>
      {!isFetching && !hasNextPage && data?.pages?.length === 1 && data.pages[0].length === 0 && (
        <InformerNoResults
          title={'Клиенты не найдены'}
          subtitle={'Возможно они еще не были добавлены'}
          filtered={!!queryDebounced}
          actions={(
            <Button
              variant={'outlined'}
              color={'info'}
              onClick={() => setQuery('')}
            >
              Очистить всё
            </Button>
          )}
          sx={{
            marginTop: '20px',
          }}
        />
      )}
      {(isFetching || isFetchingNextPage || data?.pages?.[0]?.length !== 0) && (
        <TableWrapper>
          <Table
            size={'small'}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  size={'small'}
                >
                  Клиент
                </TableCell>
                <TableCell
                  size={'small'}
                >
                  Регион
                </TableCell>
                <TableCell
                  size={'small'}
                >
                  Район
                </TableCell>
                <TableCell
                  size={'small'}
                >
                  Заявки
                </TableCell>
                <TableCell
                  size={'small'}
                >
                  Рекомендации
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {status === 'success' && data.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.map((client) => (
                    <ClientRow
                      key={client.id}
                      data={client}
                    />
                  ))}
                </Fragment>
              ))}
              {(isFetching || isFetchingNextPage || hasNextPage) && (
                <TableRowSentry
                  ref={sentryRef}
                  colspan={7}
                />
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      )}
    </>
  )
}
