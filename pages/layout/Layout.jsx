import Menu from '../../components/Menu'
import Header from '../../components/Header'

const Layout = ({children}) => {
  return(
    <div>
      <Header />
      <Menu />
      {children} 
    </div>
  )
}

export default Layout 