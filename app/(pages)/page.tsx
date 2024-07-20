"use client"
import { Provider } from 'react-redux'
import store from '@/store'
import { SuperTags } from '../components/super-tags'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white" data-testid="main-page">
      <Provider store={store}>
          <SuperTags />
      </Provider>
      </main>
  );
}
