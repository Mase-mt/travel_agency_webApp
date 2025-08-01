import { Header } from "components";
import {ColumnDirective, ColumnsDirective, GridComponent} from "@syncfusion/ej2-react-grids"
import { users } from "~/constants";
import { cn, formatDate } from "~/lib/util";
import { getAllUsers } from "~/appwrite/auth";
import type { Route } from "./+types/all-users";


export const loader = async() => {
  const {users,total} = await getAllUsers(10, 0)

  return {users, total}
}




const AllUsers = ({loaderData}: Route.ComponentProps) => {
  const {users} = loaderData;
  return (
    <main className="all-users wrapper">
      <Header
        title='Manage Users'
        description='Filter, sort and access detaled user profles.'
      />
      <GridComponent dataSource={users} gridLines="None" >
        <ColumnsDirective>
          <ColumnDirective 
          field="name"
          headerText="Name"
          width={200}
          textAlign="Left"
          template={(props: UserData)=>(
            <div className="flex items-center gap-1.5 px-4">
                <img src={props.imageUrl} alt="user" className="rounded-full size-8 aspect-square" referrerPolicy="no-referrer"/>
                <span>{props.name}</span>
            </div>
          )}/>
        <ColumnDirective
        field="email"
        headerText="Email"
        width={300}/>  
        <ColumnDirective
        field="joinedAt"
        headerText="Date Joined"
        width={140}
        template={({joinedAt}: {joinedAt: string})=> formatDate(joinedAt)}/>
        <ColumnDirective
        field="status"
        headerText="Role"
        width={100} 
        template={({status}: UserData)=>(
         <article className={cn('status-column', status ==='user'? 'bg-success-50' : 'bg-light-300 text-dark-100')}> 
          <div className={cn('size-1.5 rounded-full', status ==='user'? 'bg-amber-400': 'bg-success-500')}/>
            <h3 className={cn('font-inter text-xs font-medium', status ==='user'? 'text-blue-800' : 'text-success-700')}>
              {status}
            </h3>
         </article> 
        )}/> 

        </ColumnsDirective>
        

      </GridComponent>
    </main>
  )
}

export default AllUsers