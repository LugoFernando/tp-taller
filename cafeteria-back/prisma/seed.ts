import { prisma } from "../src/prisma.js"

function slug(nombre: string): string {
    return nombre.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function imagenPath(nombre: string): string {
    return `/images/productos/${slug(nombre)}.jpg`
}

async function main() {
    const usuarios = [
        {
            email: "admin@cafeteria.com",
            password: "Admin123!",
            nombre: "Admin",
            apellido: "Cafeteria",
            direccion: "Av. Principal 100",
            rol: "admin"
        },
        {
            email: "fernando@cafeteria.com",
            password: "Cliente123!",
            nombre: "Fernando",
            apellido: "Lugo",
            direccion: "Calle Falsa 123",
            rol: "cliente"
        },
        {
            email: "gaston@cafeteria.com",
            password: "Cliente123!",
            nombre: "Gaston",
            apellido: "Escobar",
            direccion: "Av. Siempreviva 742",
            rol: "cliente"
        },
        {
            email: "pedro@cafeteria.com",
            password: "Cliente123!",
            nombre: "Pedro",
            apellido: "Lopez",
            direccion: "Calle Wallaby 42",
            rol: "cliente"
        }
    ]

    for (const u of usuarios) {
        await prisma.usuario.upsert({
            where: { email: u.email },
            update: {},
            create: u
        })
    }

    const productos = [
        { nombre: "Cafe Latte", descripcion: "Espresso con leche vaporizada y espuma suave", clasificacion: "bebidas calientes", precio: 2500 },
        { nombre: "Cappuccino", descripcion: "Espresso con espuma de leche cremosa", clasificacion: "bebidas calientes", precio: 2300 },
        { nombre: "Espresso", descripcion: "Shot intenso de cafe puro", clasificacion: "bebidas calientes", precio: 1800 },
        { nombre: "Americano", descripcion: "Espresso diluido con agua caliente", clasificacion: "bebidas calientes", precio: 2000 },
        { nombre: "Mocha", descripcion: "Cafe con chocolate y leche vaporizada", clasificacion: "bebidas calientes", precio: 2800 },
        { nombre: "Flat White", descripcion: "Doble espresso con microespuma de leche", clasificacion: "bebidas calientes", precio: 2600 },
        { nombre: "Frappuccino Frutilla", descripcion: "Bebida fria con frutilla y crema batida", clasificacion: "bebidas frias", precio: 3200 },
        { nombre: "Frappuccino Chocolate", descripcion: "Bebida fria con chocolate y hielo", clasificacion: "bebidas frias", precio: 3400 },
        { nombre: "Frappuccino Vainilla", descripcion: "Bebida fria con vainilla y crema", clasificacion: "bebidas frias", precio: 3100 },
        { nombre: "Frappuccino Caramelo", descripcion: "Bebida fria con caramelo y hielo triturado", clasificacion: "bebidas frias", precio: 3300 },
        { nombre: "Medialuna", descripcion: "Medialuna de manteca recien horneada", clasificacion: "panaderia", precio: 800 },
        { nombre: "Croissant", descripcion: "Croissant crujiente con mantequilla", clasificacion: "panaderia", precio: 1200 },
        { nombre: "Bagel con Queso Crema", descripcion: "Bagel tostado con queso crema suave", clasificacion: "panaderia", precio: 1800 },
        { nombre: "Muffin Arandanos", descripcion: "Muffin esponjoso con arandanos frescos", clasificacion: "pasteleria", precio: 1500 },
        { nombre: "Cheesecake", descripcion: "Torta de queso con frutos rojos", clasificacion: "pasteleria", precio: 2800 },
        { nombre: "Brownie", descripcion: "Brownie de chocolate con nueces", clasificacion: "pasteleria", precio: 2000 },
        { nombre: "Tiramisu", descripcion: "Postre italiano con cafe y mascarpone", clasificacion: "pasteleria", precio: 3000 },
        { nombre: "Alfajor de Maicena", descripcion: "Alfajor casero con dulce de leche", clasificacion: "pasteleria", precio: 900 },
        { nombre: "Cookie Chips Chocolate", descripcion: "Galleta crujiente con chips de chocolate", clasificacion: "pasteleria", precio: 700 },
        { nombre: "Tostado Jamon y Queso", descripcion: "Pan tostado con jamon cocido y queso", clasificacion: "salados", precio: 2200 }
    ].map(p => ({
        ...p,
        imagen: imagenPath(p.nombre)
    }))

    for (const p of productos) {
        const existe = await prisma.producto.findFirst({ where: { nombre: p.nombre } })
        if (!existe) {
            await prisma.producto.create({ data: p })
        }
    }

    console.log("Seed completado: 4 usuarios y 20 productos")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
