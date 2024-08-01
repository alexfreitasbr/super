"use client"
import { Provider } from 'react-redux'
import store from '@/store'
import { SideBar } from '../components/share/layout/sideBar';
import { AdminBoard } from '../components/share/layout/admin';
import { MenuSuperTags } from '../components/super-tags/menuSuperTags';
import { EditingArea } from '../components/share/layout/editingArea';
import { CreateSuperTag } from '../components/super-tags/CreateSuperTag';
// import { AutenticatedType, RootStateType } from '@/types/auth'
// import { redirect } from 'next/navigation'
// import { useSelector } from 'react-redux'


export default function Home() {
  // const autenticated: AutenticatedType = useSelector((state: RootStateType) => state.auth.autenticated)
  // if (autenticated) redirect('/login')
  return (

    <Provider store={store}>
      <>
        <SideBar>
          <AdminBoard />
          <MenuSuperTags />
          <CreateSuperTag />
        </SideBar>
        <EditingArea />
      </>

    </Provider>
  );
}
