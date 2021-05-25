import { Menu } from "../components/Menu";
import { PrincipalTela } from "../components/PrincipalTela";


export default function Home() {
  return (
    <div style={{display:'flex'}}>
      <Menu />
      <PrincipalTela />
    </div>
  )
}
