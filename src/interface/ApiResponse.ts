export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  meta: Meta
}
export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
  total: number
}
