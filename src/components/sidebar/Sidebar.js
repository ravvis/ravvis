import SidebarItem from "./SidebarItem";

const ITEMS = [
  {
    label: 'Profile',
  }
]

const Sidebar = () => {
  return <>
    {
      ITEMS.map(item => <SidebarItem item={item}/>)
    }
  </>
}
export default Sidebar;
