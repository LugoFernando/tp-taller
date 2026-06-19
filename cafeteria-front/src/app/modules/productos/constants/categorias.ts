export const CATEGORIAS = [
  { slug: 'bebidas-calientes', nombre: 'bebidas calientes', icono: 'pi pi-sun' },
  { slug: 'bebidas-frias', nombre: 'bebidas frias', icono: 'pi pi-cloud' },
  { slug: 'panaderia', nombre: 'panaderia', icono: 'pi pi-star' },
  { slug: 'pasteleria', nombre: 'pasteleria', icono: 'pi pi-heart' },
  { slug: 'salados', nombre: 'salados', icono: 'pi pi-shopping-bag' },
] as const;

export function slugToCategoria(slug: string): string | undefined {
  return CATEGORIAS.find(c => c.slug === slug)?.nombre;
}

export function categoriaToSlug(categoria: string): string {
  return categoria.toLowerCase().replace(/\s+/g, '-');
}
