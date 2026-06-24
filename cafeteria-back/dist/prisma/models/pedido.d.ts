import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model pedido
 *
 */
export type pedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$pedidoPayload>;
export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type PedidoAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    total: number | null;
};
export type PedidoSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    total: number | null;
};
export type PedidoMinAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    total: number | null;
    createdAt: Date | null;
};
export type PedidoMaxAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    total: number | null;
    createdAt: Date | null;
};
export type PedidoCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    total: number;
    createdAt: number;
    _all: number;
};
export type PedidoAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
    total?: true;
};
export type PedidoSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
    total?: true;
};
export type PedidoMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    total?: true;
    createdAt?: true;
};
export type PedidoMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    total?: true;
    createdAt?: true;
};
export type PedidoCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    total?: true;
    createdAt?: true;
    _all?: true;
};
export type PedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedidos to fetch.
     */
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType;
};
export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido[P]> : Prisma.GetScalarType<T[P], AggregatePedido[P]>;
};
export type pedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithAggregationInput | Prisma.pedidoOrderByWithAggregationInput[];
    by: Prisma.PedidoScalarFieldEnum[] | Prisma.PedidoScalarFieldEnum;
    having?: Prisma.pedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCountAggregateInputType | true;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type PedidoGroupByOutputType = {
    id: number;
    usuarioId: number;
    total: number;
    createdAt: Date;
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]>;
}>>;
export type pedidoWhereInput = {
    AND?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    OR?: Prisma.pedidoWhereInput[];
    NOT?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    id?: Prisma.IntFilter<"pedido"> | number;
    usuarioId?: Prisma.IntFilter<"pedido"> | number;
    total?: Prisma.FloatFilter<"pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"pedido"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    items?: Prisma.Pedido_itemListRelationFilter;
};
export type pedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    items?: Prisma.pedido_itemOrderByRelationAggregateInput;
};
export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    OR?: Prisma.pedidoWhereInput[];
    NOT?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    usuarioId?: Prisma.IntFilter<"pedido"> | number;
    total?: Prisma.FloatFilter<"pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"pedido"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    items?: Prisma.Pedido_itemListRelationFilter;
}, "id">;
export type pedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.pedidoCountOrderByAggregateInput;
    _avg?: Prisma.pedidoAvgOrderByAggregateInput;
    _max?: Prisma.pedidoMaxOrderByAggregateInput;
    _min?: Prisma.pedidoMinOrderByAggregateInput;
    _sum?: Prisma.pedidoSumOrderByAggregateInput;
};
export type pedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.pedidoScalarWhereWithAggregatesInput | Prisma.pedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.pedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pedidoScalarWhereWithAggregatesInput | Prisma.pedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"pedido"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"pedido"> | number;
    total?: Prisma.FloatWithAggregatesFilter<"pedido"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"pedido"> | Date | string;
};
export type pedidoCreateInput = {
    total: number;
    createdAt?: Date | string;
    usuario: Prisma.usuarioCreateNestedOneWithoutPedidosInput;
    items?: Prisma.pedido_itemCreateNestedManyWithoutPedidoInput;
};
export type pedidoUncheckedCreateInput = {
    id?: number;
    usuarioId: number;
    total: number;
    createdAt?: Date | string;
    items?: Prisma.pedido_itemUncheckedCreateNestedManyWithoutPedidoInput;
};
export type pedidoUpdateInput = {
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutPedidosNestedInput;
    items?: Prisma.pedido_itemUpdateManyWithoutPedidoNestedInput;
};
export type pedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.pedido_itemUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type pedidoCreateManyInput = {
    id?: number;
    usuarioId: number;
    total: number;
    createdAt?: Date | string;
};
export type pedidoUpdateManyMutationInput = {
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PedidoListRelationFilter = {
    every?: Prisma.pedidoWhereInput;
    some?: Prisma.pedidoWhereInput;
    none?: Prisma.pedidoWhereInput;
};
export type pedidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type pedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type pedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type pedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type pedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PedidoScalarRelationFilter = {
    is?: Prisma.pedidoWhereInput;
    isNot?: Prisma.pedidoWhereInput;
};
export type pedidoCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput> | Prisma.pedidoCreateWithoutUsuarioInput[] | Prisma.pedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutUsuarioInput | Prisma.pedidoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.pedidoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
};
export type pedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput> | Prisma.pedidoCreateWithoutUsuarioInput[] | Prisma.pedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutUsuarioInput | Prisma.pedidoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.pedidoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
};
export type pedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput> | Prisma.pedidoCreateWithoutUsuarioInput[] | Prisma.pedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutUsuarioInput | Prisma.pedidoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.pedidoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.pedidoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.pedidoCreateManyUsuarioInputEnvelope;
    set?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    disconnect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    delete?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    connect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    update?: Prisma.pedidoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.pedidoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.pedidoUpdateManyWithWhereWithoutUsuarioInput | Prisma.pedidoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.pedidoScalarWhereInput | Prisma.pedidoScalarWhereInput[];
};
export type pedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput> | Prisma.pedidoCreateWithoutUsuarioInput[] | Prisma.pedidoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutUsuarioInput | Prisma.pedidoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.pedidoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.pedidoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.pedidoCreateManyUsuarioInputEnvelope;
    set?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    disconnect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    delete?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    connect?: Prisma.pedidoWhereUniqueInput | Prisma.pedidoWhereUniqueInput[];
    update?: Prisma.pedidoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.pedidoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.pedidoUpdateManyWithWhereWithoutUsuarioInput | Prisma.pedidoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.pedidoScalarWhereInput | Prisma.pedidoScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type pedidoCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutItemsInput, Prisma.pedidoUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutItemsInput;
    connect?: Prisma.pedidoWhereUniqueInput;
};
export type pedidoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutItemsInput, Prisma.pedidoUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.pedidoUpsertWithoutItemsInput;
    connect?: Prisma.pedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pedidoUpdateToOneWithWhereWithoutItemsInput, Prisma.pedidoUpdateWithoutItemsInput>, Prisma.pedidoUncheckedUpdateWithoutItemsInput>;
};
export type pedidoCreateWithoutUsuarioInput = {
    total: number;
    createdAt?: Date | string;
    items?: Prisma.pedido_itemCreateNestedManyWithoutPedidoInput;
};
export type pedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    total: number;
    createdAt?: Date | string;
    items?: Prisma.pedido_itemUncheckedCreateNestedManyWithoutPedidoInput;
};
export type pedidoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput>;
};
export type pedidoCreateManyUsuarioInputEnvelope = {
    data: Prisma.pedidoCreateManyUsuarioInput | Prisma.pedidoCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type pedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.pedidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pedidoUpdateWithoutUsuarioInput, Prisma.pedidoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutUsuarioInput, Prisma.pedidoUncheckedCreateWithoutUsuarioInput>;
};
export type pedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.pedidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pedidoUpdateWithoutUsuarioInput, Prisma.pedidoUncheckedUpdateWithoutUsuarioInput>;
};
export type pedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.pedidoScalarWhereInput;
    data: Prisma.XOR<Prisma.pedidoUpdateManyMutationInput, Prisma.pedidoUncheckedUpdateManyWithoutUsuarioInput>;
};
export type pedidoScalarWhereInput = {
    AND?: Prisma.pedidoScalarWhereInput | Prisma.pedidoScalarWhereInput[];
    OR?: Prisma.pedidoScalarWhereInput[];
    NOT?: Prisma.pedidoScalarWhereInput | Prisma.pedidoScalarWhereInput[];
    id?: Prisma.IntFilter<"pedido"> | number;
    usuarioId?: Prisma.IntFilter<"pedido"> | number;
    total?: Prisma.FloatFilter<"pedido"> | number;
    createdAt?: Prisma.DateTimeFilter<"pedido"> | Date | string;
};
export type pedidoCreateWithoutItemsInput = {
    total: number;
    createdAt?: Date | string;
    usuario: Prisma.usuarioCreateNestedOneWithoutPedidosInput;
};
export type pedidoUncheckedCreateWithoutItemsInput = {
    id?: number;
    usuarioId: number;
    total: number;
    createdAt?: Date | string;
};
export type pedidoCreateOrConnectWithoutItemsInput = {
    where: Prisma.pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutItemsInput, Prisma.pedidoUncheckedCreateWithoutItemsInput>;
};
export type pedidoUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.pedidoUpdateWithoutItemsInput, Prisma.pedidoUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutItemsInput, Prisma.pedidoUncheckedCreateWithoutItemsInput>;
    where?: Prisma.pedidoWhereInput;
};
export type pedidoUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.pedidoWhereInput;
    data: Prisma.XOR<Prisma.pedidoUpdateWithoutItemsInput, Prisma.pedidoUncheckedUpdateWithoutItemsInput>;
};
export type pedidoUpdateWithoutItemsInput = {
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutPedidosNestedInput;
};
export type pedidoUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pedidoCreateManyUsuarioInput = {
    id?: number;
    total: number;
    createdAt?: Date | string;
};
export type pedidoUpdateWithoutUsuarioInput = {
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.pedido_itemUpdateManyWithoutPedidoNestedInput;
};
export type pedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.pedido_itemUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type pedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PedidoCountOutputType
 */
export type PedidoCountOutputType = {
    items: number;
};
export type PedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | PedidoCountOutputTypeCountItemsArgs;
};
/**
 * PedidoCountOutputType without action
 */
export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: Prisma.PedidoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PedidoCountOutputType without action
 */
export type PedidoCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_itemWhereInput;
};
export type pedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    total?: boolean;
    createdAt?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.pedido$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    total?: boolean;
    createdAt?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    total?: boolean;
    createdAt?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    total?: boolean;
    createdAt?: boolean;
};
export type pedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "total" | "createdAt", ExtArgs["result"]["pedido"]>;
export type pedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.pedido$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type pedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type $pedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pedido";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs>;
        items: Prisma.$pedido_itemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuarioId: number;
        total: number;
        createdAt: Date;
    }, ExtArgs["result"]["pedido"]>;
    composites: {};
};
export type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pedidoPayload, S>;
export type pedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidoCountAggregateInputType | true;
};
export interface pedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pedido'];
        meta: {
            name: 'pedido';
        };
    };
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     *
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     *
     */
    findMany<T extends pedidoFindManyArgs>(args?: Prisma.SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     *
     */
    create<T extends pedidoCreateArgs>(args: Prisma.SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends pedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     *
     */
    delete<T extends pedidoDeleteArgs>(args: Prisma.SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends pedidoUpdateArgs>(args: Prisma.SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: Prisma.SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(args?: Prisma.Subset<T, pedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Prisma.Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>;
    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends pedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: pedidoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pedido model
     */
    readonly fields: pedidoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for pedido.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.usuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.pedido$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pedido$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the pedido model
 */
export interface pedidoFieldRefs {
    readonly id: Prisma.FieldRef<"pedido", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"pedido", 'Int'>;
    readonly total: Prisma.FieldRef<"pedido", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"pedido", 'DateTime'>;
}
/**
 * pedido findUnique
 */
export type pedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which pedido to fetch.
     */
    where: Prisma.pedidoWhereUniqueInput;
};
/**
 * pedido findUniqueOrThrow
 */
export type pedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which pedido to fetch.
     */
    where: Prisma.pedidoWhereUniqueInput;
};
/**
 * pedido findFirst
 */
export type pedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which pedido to fetch.
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedidos to fetch.
     */
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pedidos.
     */
    cursor?: Prisma.pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedidos.
     */
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * pedido findFirstOrThrow
 */
export type pedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which pedido to fetch.
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedidos to fetch.
     */
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pedidos.
     */
    cursor?: Prisma.pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedidos.
     */
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * pedido findMany
 */
export type pedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter, which pedidos to fetch.
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedidos to fetch.
     */
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pedidos.
     */
    cursor?: Prisma.pedidoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedidos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedidos.
     */
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
/**
 * pedido create
 */
export type pedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * The data needed to create a pedido.
     */
    data: Prisma.XOR<Prisma.pedidoCreateInput, Prisma.pedidoUncheckedCreateInput>;
};
/**
 * pedido createMany
 */
export type pedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: Prisma.pedidoCreateManyInput | Prisma.pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * pedido createManyAndReturn
 */
export type pedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * The data used to create many pedidos.
     */
    data: Prisma.pedidoCreateManyInput | Prisma.pedidoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * pedido update
 */
export type pedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * The data needed to update a pedido.
     */
    data: Prisma.XOR<Prisma.pedidoUpdateInput, Prisma.pedidoUncheckedUpdateInput>;
    /**
     * Choose, which pedido to update.
     */
    where: Prisma.pedidoWhereUniqueInput;
};
/**
 * pedido updateMany
 */
export type pedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: Prisma.XOR<Prisma.pedidoUpdateManyMutationInput, Prisma.pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which pedidos to update
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * Limit how many pedidos to update.
     */
    limit?: number;
};
/**
 * pedido updateManyAndReturn
 */
export type pedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * The data used to update pedidos.
     */
    data: Prisma.XOR<Prisma.pedidoUpdateManyMutationInput, Prisma.pedidoUncheckedUpdateManyInput>;
    /**
     * Filter which pedidos to update
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * Limit how many pedidos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * pedido upsert
 */
export type pedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: Prisma.pedidoWhereUniqueInput;
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: Prisma.XOR<Prisma.pedidoCreateInput, Prisma.pedidoUncheckedCreateInput>;
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.pedidoUpdateInput, Prisma.pedidoUncheckedUpdateInput>;
};
/**
 * pedido delete
 */
export type pedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    /**
     * Filter which pedido to delete.
     */
    where: Prisma.pedidoWhereUniqueInput;
};
/**
 * pedido deleteMany
 */
export type pedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: Prisma.pedidoWhereInput;
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number;
};
/**
 * pedido.items
 */
export type pedido$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_item
     */
    select?: Prisma.pedido_itemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido_item
     */
    omit?: Prisma.pedido_itemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedido_itemInclude<ExtArgs> | null;
    where?: Prisma.pedido_itemWhereInput;
    orderBy?: Prisma.pedido_itemOrderByWithRelationInput | Prisma.pedido_itemOrderByWithRelationInput[];
    cursor?: Prisma.pedido_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pedido_itemScalarFieldEnum | Prisma.Pedido_itemScalarFieldEnum[];
};
/**
 * pedido without action
 */
export type pedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido
     */
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedidoInclude<ExtArgs> | null;
};
//# sourceMappingURL=pedido.d.ts.map