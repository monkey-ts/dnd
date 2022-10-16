import NavLink from "./Link"
import links from "./links.json"

export default function NavLinks() {
  const showLinks = () => {
    return links.map(link => {
      return (<NavLink key={link.id} link={link} />)
    })
  }
  
  return (
    <div className="flex justify-end">
      {showLinks()}
    </div>
  )
}