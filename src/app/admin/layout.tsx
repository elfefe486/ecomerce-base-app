import { Nav, NavLink } from "@/components/Nav"

export const dynamic = "force-dynamic"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
   
    return (
      <>
        <Nav> 
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
        </Nav>
        {/* para comentar dentro del codigo se utiliza "{/* y lo que queres poner y 
        luego cerras lo que esta dentro de 
        arestirco es lo comentado digamos    
         */}


        {/* */}
        <div className='container my-6'> {children}</div>
      </>
    );
  } ;
  