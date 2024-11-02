/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.BrandInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.createMany(input as any))),

        create: procedure.input($Schema.BrandInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.create(input as any))),

        deleteMany: procedure.input($Schema.BrandInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.deleteMany(input as any))),

        delete: procedure.input($Schema.BrandInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.delete(input as any))),

        findFirst: procedure.input($Schema.BrandInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).brand.findFirst(input as any))),

        findMany: procedure.input($Schema.BrandInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).brand.findMany(input as any))),

        findUnique: procedure.input($Schema.BrandInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).brand.findUnique(input as any))),

        updateMany: procedure.input($Schema.BrandInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.updateMany(input as any))),

        update: procedure.input($Schema.BrandInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brand.update(input as any))),

        count: procedure.input($Schema.BrandInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).brand.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BrandCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BrandCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandGetPayload<T>, Context>) => Promise<Prisma.BrandGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BrandDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BrandDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandGetPayload<T>, Context>) => Promise<Prisma.BrandGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BrandFindFirstArgs, TData = Prisma.BrandGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.BrandFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrandGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrandFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrandGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrandGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BrandFindManyArgs, TData = Array<Prisma.BrandGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.BrandFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BrandGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrandFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BrandGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BrandGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BrandFindUniqueArgs, TData = Prisma.BrandGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BrandFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrandGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BrandFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrandGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrandGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BrandUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BrandUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandGetPayload<T>, Context>) => Promise<Prisma.BrandGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.BrandCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrandCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.BrandCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BrandCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.BrandCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.BrandCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BrandCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrandCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
