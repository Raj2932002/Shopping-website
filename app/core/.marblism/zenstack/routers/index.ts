/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@zenstackhq/runtime/models'
import createUserRouter from './User.router'
import createBrandRouter from './Brand.router'
import createProductRouter from './Product.router'
import createReviewRouter from './Review.router'
import createCartRouter from './Cart.router'
import createCartItemRouter from './CartItem.router'
import createOrderRouter from './Order.router'
import createOrderItemRouter from './OrderItem.router'
import createBrandFollowerRouter from './BrandFollower.router'
import createPwaSubscriptionRouter from './PwaSubscription.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as BrandClientType } from './Brand.router'
import { ClientType as ProductClientType } from './Product.router'
import { ClientType as ReviewClientType } from './Review.router'
import { ClientType as CartClientType } from './Cart.router'
import { ClientType as CartItemClientType } from './CartItem.router'
import { ClientType as OrderClientType } from './Order.router'
import { ClientType as OrderItemClientType } from './OrderItem.router'
import { ClientType as BrandFollowerClientType } from './BrandFollower.router'
import { ClientType as PwaSubscriptionClientType } from './PwaSubscription.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    brand: createBrandRouter(router, procedure),
    product: createProductRouter(router, procedure),
    review: createReviewRouter(router, procedure),
    cart: createCartRouter(router, procedure),
    cartItem: createCartItemRouter(router, procedure),
    order: createOrderRouter(router, procedure),
    orderItem: createOrderItemRouter(router, procedure),
    brandFollower: createBrandFollowerRouter(router, procedure),
    pwaSubscription: createPwaSubscriptionRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  brand: BrandClientType<AppRouter>
  product: ProductClientType<AppRouter>
  review: ReviewClientType<AppRouter>
  cart: CartClientType<AppRouter>
  cartItem: CartItemClientType<AppRouter>
  order: OrderClientType<AppRouter>
  orderItem: OrderItemClientType<AppRouter>
  brandFollower: BrandFollowerClientType<AppRouter>
  pwaSubscription: PwaSubscriptionClientType<AppRouter>
}
