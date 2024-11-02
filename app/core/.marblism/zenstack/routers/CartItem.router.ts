/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.CartItemInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.CartItemInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.CartItemInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.CartItemInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.CartItemInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cartItem.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.CartItemInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cartItem.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.CartItemInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cartItem.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.CartItemInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.CartItemInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).cartItem.update(input as any)),
      ),

    count: procedure
      .input($Schema.CartItemInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).cartItem.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.CartItemCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.CartItemCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CartItemGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CartItemGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CartItemGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CartItemGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.CartItemDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.CartItemDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CartItemGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CartItemGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CartItemGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CartItemGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.CartItemFindFirstArgs,
      TData = Prisma.CartItemGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CartItemFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CartItemGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CartItemFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CartItemFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CartItemGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CartItemGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.CartItemFindManyArgs,
      TData = Array<Prisma.CartItemGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.CartItemFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.CartItemGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CartItemFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.CartItemFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.CartItemGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.CartItemGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.CartItemFindUniqueArgs,
      TData = Prisma.CartItemGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.CartItemFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.CartItemGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CartItemFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.CartItemFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.CartItemGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.CartItemGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.CartItemUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.CartItemUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.CartItemUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.CartItemGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.CartItemGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.CartItemUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.CartItemUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.CartItemGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.CartItemGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.CartItemCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.CartItemCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.CartItemCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CartItemCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.CartItemCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.CartItemCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.CartItemCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.CartItemCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
