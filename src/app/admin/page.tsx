import db from "@/components/db/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function getSalesData() {
     db.order.aggregate ({

        _sum: { pricePaidInCents: true}, 
        _count: true

     })

     return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
         }
}

export default function AdminDashboard() {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-4">

<DashboardCard title="sales" subtitle="Test" body="body"/>
  </div>
}

type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashboardCard({title, subtitle, body}:
    DashboardCardProps) { 
        return <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        
        <CardContent>
        
            <p>{body}</p>
        </CardContent>
        
            </Card>

    }