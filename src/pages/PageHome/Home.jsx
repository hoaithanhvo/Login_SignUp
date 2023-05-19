// import from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Components/ThereProvider'

function Home() {
    const theme = useContext(ThemeContext)
    console.log(theme.age);
    return (
        <div style={{ textAlign: "center" }}>

            <h1>{`Chào mừng  ${theme.firstname}  đến với trang chủ của mình`}</h1>
        </div>
    )
}

export default Home