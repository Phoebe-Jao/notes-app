import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen h-full relative pb-4">
      <Header />
      { children }
      <div className="absolute bottom-0 left-0 right-0 -z-1 bg-secondary/80 rounded-tl-full rounded-tr-full w-full h-20"></div>
    </main>
  )
}

export default Layout;