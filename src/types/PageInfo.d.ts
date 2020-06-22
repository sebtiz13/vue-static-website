export interface PageInfo {
  perPage: number
  currentPage: number
  totalPages: number
  totalItems: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  isFirst: boolean
  isLast: boolean
}
