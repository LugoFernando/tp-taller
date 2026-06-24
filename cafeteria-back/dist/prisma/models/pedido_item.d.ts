import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model pedido_item
 *
 */
export type pedido_itemModel = runtime.Types.Result.DefaultSelection<Prisma.$pedido_itemPayload>;
export type AggregatePedido_item = {
    _count: Pedido_itemCountAggregateOutputType | null;
    _avg: Pedido_itemAvgAggregateOutputType | null;
    _sum: Pedido_itemSumAggregateOutputType | null;
    _min: Pedido_itemMinAggregateOutputType | null;
    _max: Pedido_itemMaxAggregateOutputType | null;
};
export type Pedido_itemAvgAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    precioSnapshot: number | null;
    cantidad: number | null;
};
export type Pedido_itemSumAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    precioSnapshot: number | null;
    cantidad: number | null;
};
export type Pedido_itemMinAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    nombreSnapshot: string | null;
    descripcionSnapshot: string | null;
    clasificacionSnapshot: string | null;
    precioSnapshot: number | null;
    cantidad: number | null;
    imagenSnapshot: string | null;
};
export type Pedido_itemMaxAggregateOutputType = {
    id: number | null;
    pedidoId: number | null;
    productoId: number | null;
    nombreSnapshot: string | null;
    descripcionSnapshot: string | null;
    clasificacionSnapshot: string | null;
    precioSnapshot: number | null;
    cantidad: number | null;
    imagenSnapshot: string | null;
};
export type Pedido_itemCountAggregateOutputType = {
    id: number;
    pedidoId: number;
    productoId: number;
    nombreSnapshot: number;
    descripcionSnapshot: number;
    clasificacionSnapshot: number;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot: number;
    _all: number;
};
export type Pedido_itemAvgAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    precioSnapshot?: true;
    cantidad?: true;
};
export type Pedido_itemSumAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    precioSnapshot?: true;
    cantidad?: true;
};
export type Pedido_itemMinAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    nombreSnapshot?: true;
    descripcionSnapshot?: true;
    clasificacionSnapshot?: true;
    precioSnapshot?: true;
    cantidad?: true;
    imagenSnapshot?: true;
};
export type Pedido_itemMaxAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    nombreSnapshot?: true;
    descripcionSnapshot?: true;
    clasificacionSnapshot?: true;
    precioSnapshot?: true;
    cantidad?: true;
    imagenSnapshot?: true;
};
export type Pedido_itemCountAggregateInputType = {
    id?: true;
    pedidoId?: true;
    productoId?: true;
    nombreSnapshot?: true;
    descripcionSnapshot?: true;
    clasificacionSnapshot?: true;
    precioSnapshot?: true;
    cantidad?: true;
    imagenSnapshot?: true;
    _all?: true;
};
export type Pedido_itemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_item to aggregate.
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedido_items to fetch.
     */
    orderBy?: Prisma.pedido_itemOrderByWithRelationInput | Prisma.pedido_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.pedido_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedido_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedido_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pedido_items
    **/
    _count?: true | Pedido_itemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Pedido_itemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Pedido_itemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_itemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_itemMaxAggregateInputType;
};
export type GetPedido_itemAggregateType<T extends Pedido_itemAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido_item]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido_item[P]> : Prisma.GetScalarType<T[P], AggregatePedido_item[P]>;
};
export type pedido_itemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_itemWhereInput;
    orderBy?: Prisma.pedido_itemOrderByWithAggregationInput | Prisma.pedido_itemOrderByWithAggregationInput[];
    by: Prisma.Pedido_itemScalarFieldEnum[] | Prisma.Pedido_itemScalarFieldEnum;
    having?: Prisma.pedido_itemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pedido_itemCountAggregateInputType | true;
    _avg?: Pedido_itemAvgAggregateInputType;
    _sum?: Pedido_itemSumAggregateInputType;
    _min?: Pedido_itemMinAggregateInputType;
    _max?: Pedido_itemMaxAggregateInputType;
};
export type Pedido_itemGroupByOutputType = {
    id: number;
    pedidoId: number;
    productoId: number | null;
    nombreSnapshot: string;
    descripcionSnapshot: string | null;
    clasificacionSnapshot: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot: string | null;
    _count: Pedido_itemCountAggregateOutputType | null;
    _avg: Pedido_itemAvgAggregateOutputType | null;
    _sum: Pedido_itemSumAggregateOutputType | null;
    _min: Pedido_itemMinAggregateOutputType | null;
    _max: Pedido_itemMaxAggregateOutputType | null;
};
export type GetPedido_itemGroupByPayload<T extends pedido_itemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Pedido_itemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Pedido_itemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Pedido_itemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Pedido_itemGroupByOutputType[P]>;
}>>;
export type pedido_itemWhereInput = {
    AND?: Prisma.pedido_itemWhereInput | Prisma.pedido_itemWhereInput[];
    OR?: Prisma.pedido_itemWhereInput[];
    NOT?: Prisma.pedido_itemWhereInput | Prisma.pedido_itemWhereInput[];
    id?: Prisma.IntFilter<"pedido_item"> | number;
    pedidoId?: Prisma.IntFilter<"pedido_item"> | number;
    productoId?: Prisma.IntNullableFilter<"pedido_item"> | number | null;
    nombreSnapshot?: Prisma.StringFilter<"pedido_item"> | string;
    descripcionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    clasificacionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    precioSnapshot?: Prisma.FloatFilter<"pedido_item"> | number;
    cantidad?: Prisma.IntFilter<"pedido_item"> | number;
    imagenSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.pedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoNullableScalarRelationFilter, Prisma.productoWhereInput> | null;
};
export type pedido_itemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombreSnapshot?: Prisma.SortOrder;
    descripcionSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    clasificacionSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    imagenSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    pedido?: Prisma.pedidoOrderByWithRelationInput;
    producto?: Prisma.productoOrderByWithRelationInput;
};
export type pedido_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.pedido_itemWhereInput | Prisma.pedido_itemWhereInput[];
    OR?: Prisma.pedido_itemWhereInput[];
    NOT?: Prisma.pedido_itemWhereInput | Prisma.pedido_itemWhereInput[];
    pedidoId?: Prisma.IntFilter<"pedido_item"> | number;
    productoId?: Prisma.IntNullableFilter<"pedido_item"> | number | null;
    nombreSnapshot?: Prisma.StringFilter<"pedido_item"> | string;
    descripcionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    clasificacionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    precioSnapshot?: Prisma.FloatFilter<"pedido_item"> | number;
    cantidad?: Prisma.IntFilter<"pedido_item"> | number;
    imagenSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.pedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoNullableScalarRelationFilter, Prisma.productoWhereInput> | null;
}, "id">;
export type pedido_itemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombreSnapshot?: Prisma.SortOrder;
    descripcionSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    clasificacionSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    imagenSnapshot?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.pedido_itemCountOrderByAggregateInput;
    _avg?: Prisma.pedido_itemAvgOrderByAggregateInput;
    _max?: Prisma.pedido_itemMaxOrderByAggregateInput;
    _min?: Prisma.pedido_itemMinOrderByAggregateInput;
    _sum?: Prisma.pedido_itemSumOrderByAggregateInput;
};
export type pedido_itemScalarWhereWithAggregatesInput = {
    AND?: Prisma.pedido_itemScalarWhereWithAggregatesInput | Prisma.pedido_itemScalarWhereWithAggregatesInput[];
    OR?: Prisma.pedido_itemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pedido_itemScalarWhereWithAggregatesInput | Prisma.pedido_itemScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"pedido_item"> | number;
    pedidoId?: Prisma.IntWithAggregatesFilter<"pedido_item"> | number;
    productoId?: Prisma.IntNullableWithAggregatesFilter<"pedido_item"> | number | null;
    nombreSnapshot?: Prisma.StringWithAggregatesFilter<"pedido_item"> | string;
    descripcionSnapshot?: Prisma.StringNullableWithAggregatesFilter<"pedido_item"> | string | null;
    clasificacionSnapshot?: Prisma.StringNullableWithAggregatesFilter<"pedido_item"> | string | null;
    precioSnapshot?: Prisma.FloatWithAggregatesFilter<"pedido_item"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"pedido_item"> | number;
    imagenSnapshot?: Prisma.StringNullableWithAggregatesFilter<"pedido_item"> | string | null;
};
export type pedido_itemCreateInput = {
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
    pedido: Prisma.pedidoCreateNestedOneWithoutItemsInput;
    producto?: Prisma.productoCreateNestedOneWithoutPedidoItemsInput;
};
export type pedido_itemUncheckedCreateInput = {
    id?: number;
    pedidoId: number;
    productoId?: number | null;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemUpdateInput = {
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pedido?: Prisma.pedidoUpdateOneRequiredWithoutItemsNestedInput;
    producto?: Prisma.productoUpdateOneWithoutPedidoItemsNestedInput;
};
export type pedido_itemUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemCreateManyInput = {
    id?: number;
    pedidoId: number;
    productoId?: number | null;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemUpdateManyMutationInput = {
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Pedido_itemListRelationFilter = {
    every?: Prisma.pedido_itemWhereInput;
    some?: Prisma.pedido_itemWhereInput;
    none?: Prisma.pedido_itemWhereInput;
};
export type pedido_itemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pedido_itemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    nombreSnapshot?: Prisma.SortOrder;
    descripcionSnapshot?: Prisma.SortOrder;
    clasificacionSnapshot?: Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    imagenSnapshot?: Prisma.SortOrder;
};
export type pedido_itemAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedido_itemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    nombreSnapshot?: Prisma.SortOrder;
    descripcionSnapshot?: Prisma.SortOrder;
    clasificacionSnapshot?: Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    imagenSnapshot?: Prisma.SortOrder;
};
export type pedido_itemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    nombreSnapshot?: Prisma.SortOrder;
    descripcionSnapshot?: Prisma.SortOrder;
    clasificacionSnapshot?: Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    imagenSnapshot?: Prisma.SortOrder;
};
export type pedido_itemSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pedidoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    precioSnapshot?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedido_itemCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput> | Prisma.pedido_itemCreateWithoutProductoInput[] | Prisma.pedido_itemUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutProductoInput | Prisma.pedido_itemCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.pedido_itemCreateManyProductoInputEnvelope;
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
};
export type pedido_itemUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput> | Prisma.pedido_itemCreateWithoutProductoInput[] | Prisma.pedido_itemUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutProductoInput | Prisma.pedido_itemCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.pedido_itemCreateManyProductoInputEnvelope;
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
};
export type pedido_itemUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput> | Prisma.pedido_itemCreateWithoutProductoInput[] | Prisma.pedido_itemUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutProductoInput | Prisma.pedido_itemCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.pedido_itemUpsertWithWhereUniqueWithoutProductoInput | Prisma.pedido_itemUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.pedido_itemCreateManyProductoInputEnvelope;
    set?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    disconnect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    delete?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    update?: Prisma.pedido_itemUpdateWithWhereUniqueWithoutProductoInput | Prisma.pedido_itemUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.pedido_itemUpdateManyWithWhereWithoutProductoInput | Prisma.pedido_itemUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
};
export type pedido_itemUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput> | Prisma.pedido_itemCreateWithoutProductoInput[] | Prisma.pedido_itemUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutProductoInput | Prisma.pedido_itemCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.pedido_itemUpsertWithWhereUniqueWithoutProductoInput | Prisma.pedido_itemUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.pedido_itemCreateManyProductoInputEnvelope;
    set?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    disconnect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    delete?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    update?: Prisma.pedido_itemUpdateWithWhereUniqueWithoutProductoInput | Prisma.pedido_itemUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.pedido_itemUpdateManyWithWhereWithoutProductoInput | Prisma.pedido_itemUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
};
export type pedido_itemCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput> | Prisma.pedido_itemCreateWithoutPedidoInput[] | Prisma.pedido_itemUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutPedidoInput | Prisma.pedido_itemCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.pedido_itemCreateManyPedidoInputEnvelope;
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
};
export type pedido_itemUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput> | Prisma.pedido_itemCreateWithoutPedidoInput[] | Prisma.pedido_itemUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutPedidoInput | Prisma.pedido_itemCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.pedido_itemCreateManyPedidoInputEnvelope;
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
};
export type pedido_itemUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput> | Prisma.pedido_itemCreateWithoutPedidoInput[] | Prisma.pedido_itemUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutPedidoInput | Prisma.pedido_itemCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.pedido_itemUpsertWithWhereUniqueWithoutPedidoInput | Prisma.pedido_itemUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.pedido_itemCreateManyPedidoInputEnvelope;
    set?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    disconnect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    delete?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    update?: Prisma.pedido_itemUpdateWithWhereUniqueWithoutPedidoInput | Prisma.pedido_itemUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.pedido_itemUpdateManyWithWhereWithoutPedidoInput | Prisma.pedido_itemUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
};
export type pedido_itemUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput> | Prisma.pedido_itemCreateWithoutPedidoInput[] | Prisma.pedido_itemUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_itemCreateOrConnectWithoutPedidoInput | Prisma.pedido_itemCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.pedido_itemUpsertWithWhereUniqueWithoutPedidoInput | Prisma.pedido_itemUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.pedido_itemCreateManyPedidoInputEnvelope;
    set?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    disconnect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    delete?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    connect?: Prisma.pedido_itemWhereUniqueInput | Prisma.pedido_itemWhereUniqueInput[];
    update?: Prisma.pedido_itemUpdateWithWhereUniqueWithoutPedidoInput | Prisma.pedido_itemUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.pedido_itemUpdateManyWithWhereWithoutPedidoInput | Prisma.pedido_itemUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type pedido_itemCreateWithoutProductoInput = {
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
    pedido: Prisma.pedidoCreateNestedOneWithoutItemsInput;
};
export type pedido_itemUncheckedCreateWithoutProductoInput = {
    id?: number;
    pedidoId: number;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemCreateOrConnectWithoutProductoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput>;
};
export type pedido_itemCreateManyProductoInputEnvelope = {
    data: Prisma.pedido_itemCreateManyProductoInput | Prisma.pedido_itemCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type pedido_itemUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    update: Prisma.XOR<Prisma.pedido_itemUpdateWithoutProductoInput, Prisma.pedido_itemUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.pedido_itemCreateWithoutProductoInput, Prisma.pedido_itemUncheckedCreateWithoutProductoInput>;
};
export type pedido_itemUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    data: Prisma.XOR<Prisma.pedido_itemUpdateWithoutProductoInput, Prisma.pedido_itemUncheckedUpdateWithoutProductoInput>;
};
export type pedido_itemUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.pedido_itemScalarWhereInput;
    data: Prisma.XOR<Prisma.pedido_itemUpdateManyMutationInput, Prisma.pedido_itemUncheckedUpdateManyWithoutProductoInput>;
};
export type pedido_itemScalarWhereInput = {
    AND?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
    OR?: Prisma.pedido_itemScalarWhereInput[];
    NOT?: Prisma.pedido_itemScalarWhereInput | Prisma.pedido_itemScalarWhereInput[];
    id?: Prisma.IntFilter<"pedido_item"> | number;
    pedidoId?: Prisma.IntFilter<"pedido_item"> | number;
    productoId?: Prisma.IntNullableFilter<"pedido_item"> | number | null;
    nombreSnapshot?: Prisma.StringFilter<"pedido_item"> | string;
    descripcionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    clasificacionSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
    precioSnapshot?: Prisma.FloatFilter<"pedido_item"> | number;
    cantidad?: Prisma.IntFilter<"pedido_item"> | number;
    imagenSnapshot?: Prisma.StringNullableFilter<"pedido_item"> | string | null;
};
export type pedido_itemCreateWithoutPedidoInput = {
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
    producto?: Prisma.productoCreateNestedOneWithoutPedidoItemsInput;
};
export type pedido_itemUncheckedCreateWithoutPedidoInput = {
    id?: number;
    productoId?: number | null;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemCreateOrConnectWithoutPedidoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput>;
};
export type pedido_itemCreateManyPedidoInputEnvelope = {
    data: Prisma.pedido_itemCreateManyPedidoInput | Prisma.pedido_itemCreateManyPedidoInput[];
    skipDuplicates?: boolean;
};
export type pedido_itemUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    update: Prisma.XOR<Prisma.pedido_itemUpdateWithoutPedidoInput, Prisma.pedido_itemUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.pedido_itemCreateWithoutPedidoInput, Prisma.pedido_itemUncheckedCreateWithoutPedidoInput>;
};
export type pedido_itemUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.pedido_itemWhereUniqueInput;
    data: Prisma.XOR<Prisma.pedido_itemUpdateWithoutPedidoInput, Prisma.pedido_itemUncheckedUpdateWithoutPedidoInput>;
};
export type pedido_itemUpdateManyWithWhereWithoutPedidoInput = {
    where: Prisma.pedido_itemScalarWhereInput;
    data: Prisma.XOR<Prisma.pedido_itemUpdateManyMutationInput, Prisma.pedido_itemUncheckedUpdateManyWithoutPedidoInput>;
};
export type pedido_itemCreateManyProductoInput = {
    id?: number;
    pedidoId: number;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemUpdateWithoutProductoInput = {
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pedido?: Prisma.pedidoUpdateOneRequiredWithoutItemsNestedInput;
};
export type pedido_itemUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pedidoId?: Prisma.IntFieldUpdateOperationsInput | number;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemCreateManyPedidoInput = {
    id?: number;
    productoId?: number | null;
    nombreSnapshot: string;
    descripcionSnapshot?: string | null;
    clasificacionSnapshot?: string | null;
    precioSnapshot: number;
    cantidad: number;
    imagenSnapshot?: string | null;
};
export type pedido_itemUpdateWithoutPedidoInput = {
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    producto?: Prisma.productoUpdateOneWithoutPedidoItemsNestedInput;
};
export type pedido_itemUncheckedUpdateWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemUncheckedUpdateManyWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombreSnapshot?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clasificacionSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precioSnapshot?: Prisma.FloatFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    imagenSnapshot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pedido_itemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    nombreSnapshot?: boolean;
    descripcionSnapshot?: boolean;
    clasificacionSnapshot?: boolean;
    precioSnapshot?: boolean;
    cantidad?: boolean;
    imagenSnapshot?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_item"]>;
export type pedido_itemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    nombreSnapshot?: boolean;
    descripcionSnapshot?: boolean;
    clasificacionSnapshot?: boolean;
    precioSnapshot?: boolean;
    cantidad?: boolean;
    imagenSnapshot?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_item"]>;
export type pedido_itemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    nombreSnapshot?: boolean;
    descripcionSnapshot?: boolean;
    clasificacionSnapshot?: boolean;
    precioSnapshot?: boolean;
    cantidad?: boolean;
    imagenSnapshot?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_item"]>;
export type pedido_itemSelectScalar = {
    id?: boolean;
    pedidoId?: boolean;
    productoId?: boolean;
    nombreSnapshot?: boolean;
    descripcionSnapshot?: boolean;
    clasificacionSnapshot?: boolean;
    precioSnapshot?: boolean;
    cantidad?: boolean;
    imagenSnapshot?: boolean;
};
export type pedido_itemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pedidoId" | "productoId" | "nombreSnapshot" | "descripcionSnapshot" | "clasificacionSnapshot" | "precioSnapshot" | "cantidad" | "imagenSnapshot", ExtArgs["result"]["pedido_item"]>;
export type pedido_itemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
};
export type pedido_itemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
};
export type pedido_itemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.pedido_item$productoArgs<ExtArgs>;
};
export type $pedido_itemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pedido_item";
    objects: {
        pedido: Prisma.$pedidoPayload<ExtArgs>;
        producto: Prisma.$productoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pedidoId: number;
        productoId: number | null;
        nombreSnapshot: string;
        descripcionSnapshot: string | null;
        clasificacionSnapshot: string | null;
        precioSnapshot: number;
        cantidad: number;
        imagenSnapshot: string | null;
    }, ExtArgs["result"]["pedido_item"]>;
    composites: {};
};
export type pedido_itemGetPayload<S extends boolean | null | undefined | pedido_itemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload, S>;
export type pedido_itemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pedido_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Pedido_itemCountAggregateInputType | true;
};
export interface pedido_itemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pedido_item'];
        meta: {
            name: 'pedido_item';
        };
    };
    /**
     * Find zero or one Pedido_item that matches the filter.
     * @param {pedido_itemFindUniqueArgs} args - Arguments to find a Pedido_item
     * @example
     * // Get one Pedido_item
     * const pedido_item = await prisma.pedido_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_itemFindUniqueArgs>(args: Prisma.SelectSubset<T, pedido_itemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pedido_item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_itemFindUniqueOrThrowArgs} args - Arguments to find a Pedido_item
     * @example
     * // Get one Pedido_item
     * const pedido_item = await prisma.pedido_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_itemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pedido_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemFindFirstArgs} args - Arguments to find a Pedido_item
     * @example
     * // Get one Pedido_item
     * const pedido_item = await prisma.pedido_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_itemFindFirstArgs>(args?: Prisma.SelectSubset<T, pedido_itemFindFirstArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pedido_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemFindFirstOrThrowArgs} args - Arguments to find a Pedido_item
     * @example
     * // Get one Pedido_item
     * const pedido_item = await prisma.pedido_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_itemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pedido_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pedido_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_items
     * const pedido_items = await prisma.pedido_item.findMany()
     *
     * // Get first 10 Pedido_items
     * const pedido_items = await prisma.pedido_item.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pedido_itemWithIdOnly = await prisma.pedido_item.findMany({ select: { id: true } })
     *
     */
    findMany<T extends pedido_itemFindManyArgs>(args?: Prisma.SelectSubset<T, pedido_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pedido_item.
     * @param {pedido_itemCreateArgs} args - Arguments to create a Pedido_item.
     * @example
     * // Create one Pedido_item
     * const Pedido_item = await prisma.pedido_item.create({
     *   data: {
     *     // ... data to create a Pedido_item
     *   }
     * })
     *
     */
    create<T extends pedido_itemCreateArgs>(args: Prisma.SelectSubset<T, pedido_itemCreateArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pedido_items.
     * @param {pedido_itemCreateManyArgs} args - Arguments to create many Pedido_items.
     * @example
     * // Create many Pedido_items
     * const pedido_item = await prisma.pedido_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends pedido_itemCreateManyArgs>(args?: Prisma.SelectSubset<T, pedido_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Pedido_items and returns the data saved in the database.
     * @param {pedido_itemCreateManyAndReturnArgs} args - Arguments to create many Pedido_items.
     * @example
     * // Create many Pedido_items
     * const pedido_item = await prisma.pedido_item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Pedido_items and only return the `id`
     * const pedido_itemWithIdOnly = await prisma.pedido_item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends pedido_itemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pedido_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Pedido_item.
     * @param {pedido_itemDeleteArgs} args - Arguments to delete one Pedido_item.
     * @example
     * // Delete one Pedido_item
     * const Pedido_item = await prisma.pedido_item.delete({
     *   where: {
     *     // ... filter to delete one Pedido_item
     *   }
     * })
     *
     */
    delete<T extends pedido_itemDeleteArgs>(args: Prisma.SelectSubset<T, pedido_itemDeleteArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pedido_item.
     * @param {pedido_itemUpdateArgs} args - Arguments to update one Pedido_item.
     * @example
     * // Update one Pedido_item
     * const pedido_item = await prisma.pedido_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends pedido_itemUpdateArgs>(args: Prisma.SelectSubset<T, pedido_itemUpdateArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pedido_items.
     * @param {pedido_itemDeleteManyArgs} args - Arguments to filter Pedido_items to delete.
     * @example
     * // Delete a few Pedido_items
     * const { count } = await prisma.pedido_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends pedido_itemDeleteManyArgs>(args?: Prisma.SelectSubset<T, pedido_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedido_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_items
     * const pedido_item = await prisma.pedido_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends pedido_itemUpdateManyArgs>(args: Prisma.SelectSubset<T, pedido_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pedido_items and returns the data updated in the database.
     * @param {pedido_itemUpdateManyAndReturnArgs} args - Arguments to update many Pedido_items.
     * @example
     * // Update many Pedido_items
     * const pedido_item = await prisma.pedido_item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Pedido_items and only return the `id`
     * const pedido_itemWithIdOnly = await prisma.pedido_item.updateManyAndReturn({
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
    updateManyAndReturn<T extends pedido_itemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pedido_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Pedido_item.
     * @param {pedido_itemUpsertArgs} args - Arguments to update or create a Pedido_item.
     * @example
     * // Update or create a Pedido_item
     * const pedido_item = await prisma.pedido_item.upsert({
     *   create: {
     *     // ... data to create a Pedido_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_item we want to update
     *   }
     * })
     */
    upsert<T extends pedido_itemUpsertArgs>(args: Prisma.SelectSubset<T, pedido_itemUpsertArgs<ExtArgs>>): Prisma.Prisma__pedido_itemClient<runtime.Types.Result.GetResult<Prisma.$pedido_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pedido_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemCountArgs} args - Arguments to filter Pedido_items to count.
     * @example
     * // Count the number of Pedido_items
     * const count = await prisma.pedido_item.count({
     *   where: {
     *     // ... the filter for the Pedido_items we want to count
     *   }
     * })
    **/
    count<T extends pedido_itemCountArgs>(args?: Prisma.Subset<T, pedido_itemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Pedido_itemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pedido_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pedido_itemAggregateArgs>(args: Prisma.Subset<T, Pedido_itemAggregateArgs>): Prisma.PrismaPromise<GetPedido_itemAggregateType<T>>;
    /**
     * Group by Pedido_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_itemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends pedido_itemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pedido_itemGroupByArgs['orderBy'];
    } : {
        orderBy?: pedido_itemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pedido_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pedido_item model
     */
    readonly fields: pedido_itemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for pedido_item.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__pedido_itemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.pedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.pedido_item$productoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pedido_item$productoArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the pedido_item model
 */
export interface pedido_itemFieldRefs {
    readonly id: Prisma.FieldRef<"pedido_item", 'Int'>;
    readonly pedidoId: Prisma.FieldRef<"pedido_item", 'Int'>;
    readonly productoId: Prisma.FieldRef<"pedido_item", 'Int'>;
    readonly nombreSnapshot: Prisma.FieldRef<"pedido_item", 'String'>;
    readonly descripcionSnapshot: Prisma.FieldRef<"pedido_item", 'String'>;
    readonly clasificacionSnapshot: Prisma.FieldRef<"pedido_item", 'String'>;
    readonly precioSnapshot: Prisma.FieldRef<"pedido_item", 'Float'>;
    readonly cantidad: Prisma.FieldRef<"pedido_item", 'Int'>;
    readonly imagenSnapshot: Prisma.FieldRef<"pedido_item", 'String'>;
}
/**
 * pedido_item findUnique
 */
export type pedido_itemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which pedido_item to fetch.
     */
    where: Prisma.pedido_itemWhereUniqueInput;
};
/**
 * pedido_item findUniqueOrThrow
 */
export type pedido_itemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which pedido_item to fetch.
     */
    where: Prisma.pedido_itemWhereUniqueInput;
};
/**
 * pedido_item findFirst
 */
export type pedido_itemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which pedido_item to fetch.
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedido_items to fetch.
     */
    orderBy?: Prisma.pedido_itemOrderByWithRelationInput | Prisma.pedido_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pedido_items.
     */
    cursor?: Prisma.pedido_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedido_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedido_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedido_items.
     */
    distinct?: Prisma.Pedido_itemScalarFieldEnum | Prisma.Pedido_itemScalarFieldEnum[];
};
/**
 * pedido_item findFirstOrThrow
 */
export type pedido_itemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which pedido_item to fetch.
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedido_items to fetch.
     */
    orderBy?: Prisma.pedido_itemOrderByWithRelationInput | Prisma.pedido_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pedido_items.
     */
    cursor?: Prisma.pedido_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedido_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedido_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedido_items.
     */
    distinct?: Prisma.Pedido_itemScalarFieldEnum | Prisma.Pedido_itemScalarFieldEnum[];
};
/**
 * pedido_item findMany
 */
export type pedido_itemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which pedido_items to fetch.
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pedido_items to fetch.
     */
    orderBy?: Prisma.pedido_itemOrderByWithRelationInput | Prisma.pedido_itemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pedido_items.
     */
    cursor?: Prisma.pedido_itemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pedido_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pedido_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pedido_items.
     */
    distinct?: Prisma.Pedido_itemScalarFieldEnum | Prisma.Pedido_itemScalarFieldEnum[];
};
/**
 * pedido_item create
 */
export type pedido_itemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a pedido_item.
     */
    data: Prisma.XOR<Prisma.pedido_itemCreateInput, Prisma.pedido_itemUncheckedCreateInput>;
};
/**
 * pedido_item createMany
 */
export type pedido_itemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_items.
     */
    data: Prisma.pedido_itemCreateManyInput | Prisma.pedido_itemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * pedido_item createManyAndReturn
 */
export type pedido_itemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_item
     */
    select?: Prisma.pedido_itemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido_item
     */
    omit?: Prisma.pedido_itemOmit<ExtArgs> | null;
    /**
     * The data used to create many pedido_items.
     */
    data: Prisma.pedido_itemCreateManyInput | Prisma.pedido_itemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedido_itemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * pedido_item update
 */
export type pedido_itemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a pedido_item.
     */
    data: Prisma.XOR<Prisma.pedido_itemUpdateInput, Prisma.pedido_itemUncheckedUpdateInput>;
    /**
     * Choose, which pedido_item to update.
     */
    where: Prisma.pedido_itemWhereUniqueInput;
};
/**
 * pedido_item updateMany
 */
export type pedido_itemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_items.
     */
    data: Prisma.XOR<Prisma.pedido_itemUpdateManyMutationInput, Prisma.pedido_itemUncheckedUpdateManyInput>;
    /**
     * Filter which pedido_items to update
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * Limit how many pedido_items to update.
     */
    limit?: number;
};
/**
 * pedido_item updateManyAndReturn
 */
export type pedido_itemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_item
     */
    select?: Prisma.pedido_itemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the pedido_item
     */
    omit?: Prisma.pedido_itemOmit<ExtArgs> | null;
    /**
     * The data used to update pedido_items.
     */
    data: Prisma.XOR<Prisma.pedido_itemUpdateManyMutationInput, Prisma.pedido_itemUncheckedUpdateManyInput>;
    /**
     * Filter which pedido_items to update
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * Limit how many pedido_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pedido_itemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * pedido_item upsert
 */
export type pedido_itemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the pedido_item to update in case it exists.
     */
    where: Prisma.pedido_itemWhereUniqueInput;
    /**
     * In case the pedido_item found by the `where` argument doesn't exist, create a new pedido_item with this data.
     */
    create: Prisma.XOR<Prisma.pedido_itemCreateInput, Prisma.pedido_itemUncheckedCreateInput>;
    /**
     * In case the pedido_item was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.pedido_itemUpdateInput, Prisma.pedido_itemUncheckedUpdateInput>;
};
/**
 * pedido_item delete
 */
export type pedido_itemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which pedido_item to delete.
     */
    where: Prisma.pedido_itemWhereUniqueInput;
};
/**
 * pedido_item deleteMany
 */
export type pedido_itemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_items to delete
     */
    where?: Prisma.pedido_itemWhereInput;
    /**
     * Limit how many pedido_items to delete.
     */
    limit?: number;
};
/**
 * pedido_item.producto
 */
export type pedido_item$productoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the producto
     */
    select?: Prisma.productoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the producto
     */
    omit?: Prisma.productoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.productoInclude<ExtArgs> | null;
    where?: Prisma.productoWhereInput;
};
/**
 * pedido_item without action
 */
export type pedido_itemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=pedido_item.d.ts.map