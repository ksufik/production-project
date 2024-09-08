import { type ArticleView, type Article } from '5entities/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  view?: ArticleView

  // pagination
  page: number
  limit?: number
  hasMore: boolean
}
