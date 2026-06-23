export const CATEGORIAS = [
  { slug: 'bebidas-calientes', nombre: 'bebidas calientes', imagen: '/images/menu/bebidas-calientes.jpg' },
  { slug: 'bebidas-frias', nombre: 'bebidas frias', imagen: '/images/menu/bebidas-frias.jpg' },
  { slug: 'panaderia', nombre: 'panaderia', imagen: '/images/menu/panaderia.jpg' },
  { slug: 'pasteleria', nombre: 'pasteleria', imagen: '/images/menu/pasteleria.jpg' },
  { slug: 'salados', nombre: 'salados', imagen: '/images/menu/salados.jpg' },
] as const;

export const CATEGORIAS_NOMBRES = CATEGORIAS.map(c => c.nombre);

export function slugToCategoria(slug: string): string | undefined {
  return CATEGORIAS.find(c => c.slug === slug)?.nombre;
}

export function categoriaToSlug(categoria: string): string {
  return categoria.toLowerCase().replace(/\s+/g, '-');
}
