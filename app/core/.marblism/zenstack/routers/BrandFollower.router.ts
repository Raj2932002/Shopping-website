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

        createMany: procedure.input($Schema.BrandFollowerInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.createMany(input as any))),

        create: procedure.input($Schema.BrandFollowerInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.create(input as any))),

        deleteMany: procedure.input($Schema.BrandFollowerInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.deleteMany(input as any))),

        delete: procedure.input($Schema.BrandFollowerInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.delete(input as any))),

        findFirst: procedure.input($Schema.BrandFollowerInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).brandFollower.findFirst(input as any))),

        findMany: procedure.input($Schema.BrandFollowerInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).brandFollower.findMany(input as any))),

        findUnique: procedure.input($Schema.BrandFollowerInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).brandFollower.findUnique(input as any))),

        updateMany: procedure.input($Schema.BrandFollowerInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.updateMany(input as any))),

        update: procedure.input($Schema.BrandFollowerInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).brandFollower.update(input as any))),

        count: procedure.input($Schema.BrandFollowerInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).brandFollower.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BrandFollowerCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BrandFollowerCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandFollowerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandFollowerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandFollowerGetPayload<T>, Context>) => Promise<Prisma.BrandFollowerGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BrandFollowerDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BrandFollowerDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandFollowerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandFollowerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandFollowerGetPayload<T>, Context>) => Promise<Prisma.BrandFollowerGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BrandFollowerFindFirstArgs, TData = Prisma.BrandFollowerGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.BrandFollowerFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrandFollowerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFollowerFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrandFollowerFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrandFollowerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrandFollowerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BrandFollowerFindManyArgs, TData = Array<Prisma.BrandFollowerGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.BrandFollowerFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BrandFollowerGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFollowerFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BrandFollowerFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BrandFollowerGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BrandFollowerGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BrandFollowerFindUniqueArgs, TData = Prisma.BrandFollowerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BrandFollowerFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BrandFollowerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BrandFollowerFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BrandFollowerFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BrandFollowerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BrandFollowerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BrandFollowerUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BrandFollowerUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BrandFollowerUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BrandFollowerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BrandFollowerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BrandFollowerUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BrandFollowerUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BrandFollowerGetPayload<T>, Context>) => Promise<Prisma.BrandFollowerGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.BrandFollowerCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrandFollowerCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.BrandFollowerCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BrandFollowerCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.BrandFollowerCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.BrandFollowerCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BrandFollowerCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BrandFollowerCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
